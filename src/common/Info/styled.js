import styled from "styled-components";
import portrait from "./portrait.jpg";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin-top: -70px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Image = styled.div`
    width: 384px;
    height: 384px;
    background-image: url("${portrait}");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        width: 132px;
        height: 132px;
    }
`;

export const MainInfo = styled.div`
    margin-left: 66px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin-left: 0;
    }
`;

export const Caption = styled.p`
    color: ${({theme}) => theme.colors.primary};
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    margin: 0 0 12px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin: 12px 0 12px 0;
    }
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.secondary};
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 22px;
        line-height: 27px;
    }
`;

export const About = styled.p`
    font-size: 20px;
    line-height: 140%;
    max-width: 633px;
    color: ${({theme}) => theme.colors.primary};
    margin: 35px 0 32px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
        margin: 16px 0 24px;
    }
`;

export const MailTo = styled.a`
    text-decoration: none;
`;
