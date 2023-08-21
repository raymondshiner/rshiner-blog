import styled from "styled-components";

export const TopBar = () => {
    return <TopBarWrapper>
        <Header>RS Blog</Header>
    </TopBarWrapper>;
}

const Header = styled.div`
    color: #323232;
    text-shadow: -4px 4px 4px rgba(73, 73, 73, 0.50);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const TopBarWrapper = styled.div`
    //component
    position: absolute;
    top: 0px;
    height: 48px;
    width: 100vw;
    border-bottom: 1px solid #bfbfbf;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.35);

    //content
    padding: 0 32px;
    display: flex;
    align-items: center;
`;