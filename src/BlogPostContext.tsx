import { PropsWithChildren, createContext, useContext } from "react";
import { useDownloadBlogPosts } from "./data/useDownloadBlogPosts";
import { BlogPost } from "./types/BlogPost";

interface BlogPostContextType {
    posts: BlogPost[]
}

const BlogPostContext = createContext<BlogPostContextType | undefined>(undefined);

export const BlogPostProvider = ({ children }: PropsWithChildren) => {
    const { posts, loading } = useDownloadBlogPosts();

    if (loading) return <div>App is Loading</div>;

    return <BlogPostContext.Provider value={{ posts }}>
        {children}
    </BlogPostContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useBlogPosts = () => {
    const context = useContext(BlogPostContext);

    if (!context) throw new Error("useBlogPosts must be used inside a BlogPostProvider");

    return context.posts;
}