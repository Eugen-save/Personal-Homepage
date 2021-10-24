import styled from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    max-width: 1280px;
    min-width: 320px;
    gap: 72px;
    margin: 119px auto;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        max-width: 767px;
        gap: 48px;
        margin: 32.67px auto;
        padding: 16px;
    }
`;