import styled from "styled-components";
import {ReactComponent as Logo} from "./logo.svg";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        gap: 16px;
    }
`;

export const Case = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: auto;
    }
`;

export const Header = styled.h1`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.05em;
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const SubHeader = styled.h2`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    font-weight: normal;
    margin: 0 0 16px 0;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
        line-height: 140%;
        margin: 0;
    }
`;

export const LogoGit = styled(Logo)`
    height: 40px;
    width: 40px;
    margin-bottom: 4px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        height: 32px;
        width: 32px;
    }
`;

export const Circle = styled.div`
    width: 160px;
    height: 160px;
    border: 11.375px solid ${({theme}) => theme.colors.tileBorder};
    box-sizing: border-box;
    border-radius: 50%;
    margin-bottom: 68px;
    border-right: 11.375px solid ${({theme}) => theme.colors.additional};
    animation: circleAnimation 2s linear infinite;

    @keyframes circleAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const LoadingMessage = styled.p`
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.secondary};
    margin: 72px 0 40px 0;
`;

export const ErrorHeader = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.secondary};
`;

export const ErrorMessage = styled.p`
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.secondary};
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const StyledError = styled.div`
    margin: 72px 0 68px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;