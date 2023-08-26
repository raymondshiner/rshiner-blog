import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { styled } from "styled-components";
import { PageNotFound404 } from "./components/404";
import { BlogPost } from "./components/BlogPost";
import { BlogPostList } from "./components/BlogPostList/BlogPostList";
import { TopBar } from "./components/TopBar/TopBar";

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

const AppLayout = () => <>
    <TopBar />
    <MainContentWrapper>
        <Outlet />
    </MainContentWrapper >
</>;

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <PageNotFound404 />,
        children: [
            {
                path: '/',
                element: <BlogPostList />,
            },
            {
                path: '/posts/:title',
                element: <BlogPost />
            }
        ]
    },
])

export default function App() { return <RouterProvider router={router} /> }
