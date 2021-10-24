import styled from "styled-components";

export const StyledTile = styled.article`
    border: 6px solid ${({theme}) => theme.colors.tileBorder};
    box-sizing: border-box;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;

    &:hover {
        border: 6px solid ${({theme}) => theme.colors.tileBorderHover};
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin: 56px;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin: 24px;
        gap: 16px;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: ${({theme}) => theme.colors.additional};
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    order: 1;
    flex-grow: 0;
    color: ${({theme}) => theme.colors.primary};
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        line-height: 17px;    
    }
`;

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Frame = styled.li`
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    order: 0;
    flex-grow: 0;
    margin: 0;
    color: ${({theme}) => theme.colors.primary};
    gap: 8px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const LinkItem = styled.a`
    font-size: 18px;
    line-height: 140%;
    color: ${({theme}) => theme.colors.additional};
    align-items: center;
    letter-spacing: 0.05em;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        line-height: 17px;
    }
`;