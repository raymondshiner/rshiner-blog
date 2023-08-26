import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GithubIcon, LinkedInIcon, WebsiteIcon } from "./TopBarIcons";

export const TopBar = () => {
    const navigate = useNavigate();

    return <StyledTopBarWrapper>
        <Header onClick={() => navigate('/')}>RS Blog</Header>
        <IconWrapper>
            <WebsiteIcon />
            <GithubIcon />
            <LinkedInIcon />
        </IconWrapper>
    </StyledTopBarWrapper>;
}

const Header = styled.div`
    text-shadow: -4px 4px 4px rgba(73, 73, 73, 0.50);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`

const StyledTopBarWrapper = styled.div`
    //component
    position: fixed;
    top: 0px;
    height: 48px;
    width: calc(100vw - 40px);
    border-bottom: 1px solid #bfbfbf;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.35);
    background-color: white;

    //content
    padding-left: 24px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`



