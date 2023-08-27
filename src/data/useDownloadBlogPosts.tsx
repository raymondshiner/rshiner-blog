import { useState } from "react";
import { BlogPost } from "../types/BlogPost";

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

export const useDownloadBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);


    if (posts.length < 1) {
        const fakePost: BlogPost = {
            markdownContent: "loremipsumeakjsdfo;iajs;gvoijad;vobijasd;ofjias;difja;sdifj;asdifa;sdifj;asdifao;sidfo;asdjif",
            title: "My Dummy Blog Post",
            image: "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg",
            date: "04-08-2023",
            tag: ['react', 'data structure'],
            summary: "This is a dummy post. I'm bummed Drobpox didn't work"
        }

        setPosts([fakePost]);
        setLoading(false);
    }

    return { posts, loading }
}