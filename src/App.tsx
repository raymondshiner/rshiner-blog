import { styled } from "styled-components"
import { BlogPost } from "./components/BlogPost"
import { TopBar } from "./components/TopBar"

const App = () => {
    return <>
        <TopBar />
        <MainContentWrapper>
            <BlogPost />
        </MainContentWrapper>
    </>
}

export default App

const MainContentWrapper = styled.div`
    //component
    box-sizing: border-box;
    height: calc(100vh - 48px);
    margin-top: 48px;
    
    //content
    padding: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
