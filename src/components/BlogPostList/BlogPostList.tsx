import { styled } from "styled-components";
import { BlogPostCard } from "./BlogPostCard";

const testImgA = "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
const testImgB = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
const testTitle = "The Stack - and what it can teach us.";
const testTitleB = "Looking into the Future, Seeing what Testing is Like";
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"

export const BlogPostList = () => {
    return <>
        <h1>Blog Posts</h1>
        <StyledBlogPostList>
            <BlogPostCard imgSrc={testImgA} title={testTitle} summary={loremIpsum} />
            <BlogPostCard imgSrc={testImgB} title={testTitleB} summary={loremIpsum} />
            <BlogPostCard imgSrc={testImgA} title={testTitle} summary={loremIpsum} />
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