import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useBlogPosts } from "../BlogPostContext";

export const BlogPostPage = () => {
    const { title } = useParams();
    const posts = useBlogPosts();

    const activePost = posts.find(post => post.title === title);

    return <StyledBlogPostPageWrapper>
        <StyledImage src={activePost?.image} />
        <ReactMarkdown children={activePost?.markdownContent || ''} />
    </StyledBlogPostPageWrapper>
}

const StyledImage = styled.img`
    width: 100%;
    border-radius: 7px;
`

const StyledBlogPostPageWrapper = styled.div`
    width: 100vw;
    box-sizing: border-box;
    max-width: 1000px;
    padding: 16px;
    padding-bottom: 150px;
`