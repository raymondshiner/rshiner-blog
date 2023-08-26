import { useState } from "react";
import { BlogPost } from "../types/BlogPost";
import { downloadBlogPostsFromDropbox } from "./dropboxUtils";

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
        markdownContent: markdownData[2],
        summary: yamlFrontMatter.summary
    }
}

export const useDownloadBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    if (posts.length < 1) {
        downloadBlogPostsFromDropbox().then(posts => {
            const blogPosts = posts.map(post => parseBlogPost(post));
            setPosts(blogPosts);
            setLoading(false);
        })
    }

    return { posts, loading }
}