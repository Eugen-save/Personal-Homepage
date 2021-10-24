import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.colors.secondaryBackground};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 32px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        padding: 16px;
    }
`;

export const Header = styled.header`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.secondary};
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);
    padding-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        line-height: 22px;
        text-align: center;
    }
`;

export const ListItem = styled.li`
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.additional};

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 115px;
    margin: 32px 0 0 0;
    row-gap: 8px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: auto;
        column-gap: 0px;
        gap: 8px;
        margin: 12px 0 0 0;
        padding: 16px;
    }
`;