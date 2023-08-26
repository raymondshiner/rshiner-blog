import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { styled } from "styled-components";
import { BlogPostList } from "./components/BlogPostList/BlogPostList";
import { TopBar } from "./components/TopBar";


const router = createBrowserRouter([
    {
        path: '/',
        element: <BlogPostList />,
    }
])

const App = () => {
    return <>
        <TopBar />
        <MainContentWrapper>
            <RouterProvider router={router} />
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
