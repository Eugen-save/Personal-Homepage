import styled from "styled-components";
import {ReactComponent as Iconly} from "./iconly.svg";

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    box-sizing: border-box;
    border-radius: 4px;
    background: ${({theme}) => theme.colors.additional};
    font-weight: 600;
    font-size: 20.0584px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.buttonText};
    transition: 0.5s;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        gap: 14px;
        font-size: 18px;
        line-height: 22px;
    }

    &:focus {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
        transform: scale(1.15);
    }

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;

export const Icon = styled(Iconly)`
    flex: none;
    order: 0;
    flex-grow: 0;
`;
