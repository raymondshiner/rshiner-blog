import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { styled } from "styled-components";

export const GithubIcon = () =>
    <StyledIconAnchor href="https://www.github.com/raymondshiner" >
        <AiFillGithub
            alt="Github Icon"
        />
    </StyledIconAnchor>

export const LinkedInIcon = () =>
    <StyledIconAnchor href="https://www.linkedin.com/in/raymond-shiner">
        <AiFillLinkedin
            alt="LinkedIn Icon"
        />
    </StyledIconAnchor>

export const WebsiteIcon = () =>
    <StyledIconAnchor href="https://www.raymondshiner.com/">
        <StyledWebsiteIcon
            alt="Personal Website Icon"
        />
        <StyledWebsiteText>My Website</StyledWebsiteText>
    </StyledIconAnchor>

const StyledIconAnchor = styled.a`
    height: 32px;
    display: flex;
    align-items: center;
`
StyledIconAnchor.defaultProps = {
    target: '_blank'
}

const StyledWebsiteIcon = styled(CgWebsite)`
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