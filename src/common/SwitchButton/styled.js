import styled, { css } from "styled-components";
import { ReactComponent as brightnessSun } from "./brightness.svg";

export const ModeWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`;

export const ToggleButton = styled.button`
    background: ${({ theme }) => theme.colors.switcher};
    border: 1px solid ${({theme}) => theme.colors.primary};
    width: 47px;
    height: 25px;
    border-radius: 34px;
    z-index: 1;
    position: relative;
    padding: 2.54px;
    display: flex;
    align-items: center;
`;


export const Toggle = styled.div`
    background: ${({ theme }) => theme.colors.circle};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    transition: 1s;

    ${({ shifted }) => shifted && css`
        transform: translateX(19px);
    `}
`;

export const Brightness = styled(brightnessSun)`
    fill: ${({ theme }) => theme.colors.sunIcon};
    position: absolute;
`;

export const Caption = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;
