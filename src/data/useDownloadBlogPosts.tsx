import { useEffect, useState } from "react";
import { BlogPost } from "../types/BlogPost";

import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDsRpxWbyco0js0ruOhgg4cjVsQwQjx8YQ",
    authDomain: "rshiner-blog.firebaseapp.com",
    projectId: "rshiner-blog",
    storageBucket: "gs://rshiner-blog.appspot.com",
    messagingSenderId: "800045450263",
    appId: "1:800045450263:web:bbf36479da1a2ae24b0852"
    // messagingSenderId: "SENDER_ID",
    // The value of `databaseURL` depends on the location of the database
    // databaseURL: "https://DATABASE_NAME.firebaseio.com",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    // measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const listRef = ref(storage, '');

const fetchAllMarkdownFiles = async (): Promise<string[]> => {
    const result = await listAll(listRef)
        .then(async (res) => {
            const paths = res.items.map(itemRef => itemRef.fullPath);
            const markdownDataPromises = [];

            for (const path of paths) {
                try {
                    const url = await getDownloadURL(ref(storage, path));

                    const markdownPromise = new Promise((resolve, reject) => {
                        const xhr = new XMLHttpRequest();
                        xhr.responseType = 'blob';

                        xhr.onload = () => {
                            const blob = xhr.response;

                            const reader = new FileReader();
                            reader.onload = (event) => {
                                const textContent = event?.target?.result;
                                resolve(textContent);
                            };

                            reader.readAsText(blob);
                        };

                        xhr.onerror = (error) => {
                            reject(error);
                        };

                        xhr.open('GET', url);
                        xhr.send();
                    });

                    markdownDataPromises.push(markdownPromise);
                } catch (error) {
                    console.log(error);
                }
            }

            return Promise.all(markdownDataPromises);
        })
        .then(markdownData => {
            return markdownData as string[];
        })
        .catch(error => {
            console.log(error);
        });

    return result as string[];
}

export const useDownloadBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllMarkdownFiles().then(posts => {
            const parsedPosts = posts.map(parseBlogPost);
            setPosts(parsedPosts);
            setLoading(false);
        });
    }, []); // Execute only once when the component mounts

    return { posts, loading }
}

interface YamlFrontMatter {
    [key: string]: string;
}

export const parseBlogPost = (markdownPost: string): BlogPost => {
    const markdownData = markdownPost.split('---');
    const yamlFrontMatterArray = markdownData[1].trim().split('\n');

    const yamlFrontMatter: YamlFrontMatter = {};
    yamlFrontMatterArray.forEach(entry => {
        const indexOfFirstColon = entry.indexOf(':');
        if (indexOfFirstColon !== -1) {
            const key = entry.slice(0, indexOfFirstColon).trim();
            const value = entry.slice(indexOfFirstColon + 1).trim();
            yamlFrontMatter[key] = value;
        }
    });

    return {
        title: yamlFrontMatter.title,
        image: yamlFrontMatter.image,
        date: yamlFrontMatter.date,
        tag: yamlFrontMatter.tag.split(','),
        summary: yamlFrontMatter.summary,
        markdownContent: markdownData[2].trim(),
    }
}
