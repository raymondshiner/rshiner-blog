import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { styled } from "styled-components";
import { PageNotFound404 } from "./404";
import { BlogPostList } from "./components/BlogPostList/BlogPostList";
import { TopBar } from "./components/TopBar";

const AppLayout = () => <>
    <TopBar />
    <MainContentWrapper>
        <Outlet />
    </MainContentWrapper >
</>;

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <PageNotFound404 />,
        children: [
            {
                path: '/',
                element: <BlogPostList />
            }
        ]
    },
])

const App = () => <>
    <RouterProvider router={router} />
</>

export default App

const MainContentWrapper = styled.div`
    //component
    box-sizing: border-box;
    margin-top: 48px;
    height: calc(100vh - 48px);
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
