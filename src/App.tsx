import { styled } from "styled-components";
import { BlogPost } from "./components/BlogPost";
import { TopBar } from "./components/TopBar";

const testImgA = "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
const testImgB = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
const testTitle = "The Stack - and what it can teach us.";
const testTitleB = "Looking into the Future, Seeing what Testing is Like";
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"

const App = () => {
    return <>
        <TopBar />
        <MainContentWrapper>
            <h1>Blog Posts</h1>
            <BlogPostList>
                <BlogPost imgSrc={testImgA} title={testTitle} summary={loremIpsum} />
                <BlogPost imgSrc={testImgB} title={testTitleB} summary={loremIpsum} />
                <BlogPost imgSrc={testImgA} title={testTitle} summary={loremIpsum} />
            </BlogPostList>
        </MainContentWrapper >
    </>
}

export default App

const MainContentWrapper = styled.div`
    //component
    box-sizing: border-box;
    height: calc(100vh - 48px);
    margin-top: 48px;
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BlogPostList = styled.div`
    box-sizing: border-box;
    gap: 16px;
    display: flex;
    max-width: 366px;
    align-items: center;
    padding: 0px 8px;
    flex-direction: column;
`;