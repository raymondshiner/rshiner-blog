import { styled } from "styled-components";
import { TopBar } from "./TopBar/TopBar";

export const PageNotFound404 = () => {
    return <>
        <TopBar />
        <StyledErrorWrapper>
            <div style={{ fontSize: "48px" }}>404</div>
            <div>The Page You are looking for doesn't exist</div>
        </StyledErrorWrapper>
    </>
}

const StyledErrorWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
    text-align: center;
`;
