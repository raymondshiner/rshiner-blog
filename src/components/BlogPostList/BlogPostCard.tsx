import { styled } from "styled-components";

type BlogPostProps = {
    imgSrc: string;
    title: string;
    summary: string;
}

export const BlogPostCard = ({ imgSrc, title, summary }: BlogPostProps) => {
    return <Wrapper>
        <BlogPostImage src={imgSrc} />
        <Title>{title}</Title>
        <SecondaryText>
            {summary}
        </SecondaryText>
    </Wrapper>
}

const Title = styled.h2`
    color: black;
    margin: 0;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    padding-bottom: 4px;
    border-bottom: 2px solid black;
`

const SecondaryText = styled.p`
    margin: 0;
    width: 100%;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; 
`;

const Wrapper = styled.div`
    &:hover {
        background-color: #C8D1DB;
        color: #666565;
    }
    color: #999898;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 8px;
    border-radius: 7px;
    padding: 8px;
    transition: ease-in-out 0.4s;
`;

const BlogPostImage = styled.img`
    width: 100%;
    max-width: 350px;
    height: 210px;
    border-radius: 7px;
`