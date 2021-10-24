import styled from "styled-components";
import {ReactComponent as FB} from "./facebookLogo.svg";
import {ReactComponent as GIT} from "./gitHubLogo.svg";
import {ReactComponent as LI} from "./linkedINLogo.svg";
import {ReactComponent as Insta} from "./instagramLogo.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 109px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        gap: 12px;
        margin-bottom: 31px;
    }
`;

export const Intro = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.primary};
    margin: 0;
`;

export const Mail = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.secondary};
    text-decoration: none;

    &:hover {
        color: ${({theme}) => theme.colors.additional};
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const Conclusion = styled.p`
    max-width: 670px;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0;
    
    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        min-width: 288px;
        font-size: 14px;
        line-height: 17px;
    }
`;

export const StyledLogo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 32px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        gap: 16px;
        margin-top: 28px;
    }
`;

export const LinkedIN = styled(LI)`
    flex: none;
    order: 2;
    flex-grow: 0;
    fill: ${({theme}) => theme.colors.secondary};

    &:hover {
        fill: ${({theme}) => theme.colors.additional};
}
`;

export const GitHub = styled(GIT)`
    flex: none;
    order: 0;
    flex-grow: 0;
    fill: ${({theme}) => theme.colors.secondary};

    &:hover {
        fill: ${({theme}) => theme.colors.additional};
}
`;

export const Instagram = styled(Insta)`
    flex: none;
    order: 3;
    flex-grow: 0;
    fill: ${({theme}) => theme.colors.secondary};

    &:hover {
        fill: ${({theme}) => theme.colors.additional};
}
`;

export const FaceBook = styled(FB)`
    flex: none;
    order: 1;
    flex-grow: 0;
    fill: ${({theme}) => theme.colors.secondary};

    &:hover {
        fill: ${({theme}) => theme.colors.additional};
    }
`;

export const Link = styled.a`

`;