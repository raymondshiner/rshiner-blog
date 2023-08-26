import { styled } from "styled-components";

const iconSize = '32';

export const GithubIcon = () =>
    <a href="https://www.github.com/raymondshiner" target="_blank" style={{ height: 32 }}>
        <img
            src="assets/github.svg"
            alt="Github Icon"
            width={iconSize}
            height={iconSize}
        />
    </a>

export const LinkedInIcon = () =>
    <a href="https://www.linkedin.com/in/raymond-shiner" target="_blank" style={{ height: 32 }}>
        <img
            src="assets/linked-in.svg"
            alt="LinkedIn Icon"
            width={iconSize}
            height={iconSize}
        />
    </a>

export const WebsiteIcon = () =>
    <a href="https://www.raymondshiner.com/" target="_blank" style={{ height: 32, display: 'flex', alignItems: 'center' }}>
        <StyledWebsiteIcon
            src="assets/global.svg"
            alt="Personal Website Icon"
            width={iconSize}
            height={iconSize}
        />
        <StyledWebsiteText>My Website</StyledWebsiteText>
    </a>

const StyledWebsiteIcon = styled.img`
    @media screen and (min-width: 600px) {
        display: none;
    }
`

const StyledWebsiteText = styled.div`
    @media screen and (max-width: 600px) {
        display: none;
    }
    font-size: 14px;
    color: black;
`