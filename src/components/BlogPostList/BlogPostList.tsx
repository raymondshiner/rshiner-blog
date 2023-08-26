import { styled } from "styled-components";
import { useBlogPosts } from "../../BlogPostContext";
import { BlogPostCard } from "./BlogPostCard";

export const BlogPostList = () => {
    const posts = useBlogPosts();

    return <>
        <h1>Blog Posts</h1>
        <StyledBlogPostList>
            {posts.map(post => <BlogPostCard key={post.title} imgSrc={post.image} title={post.title} summary={post.summary} />)}
        </StyledBlogPostList>
    </>
}

const StyledBlogPostList = styled.div`
    box-sizing: border-box;
    gap: 16px;
    display: flex;
    max-width: 366px;
    align-items: center;
    flex-direction: column;
`;