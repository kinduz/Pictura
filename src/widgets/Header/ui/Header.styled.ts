import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    height: 80px;
    background-color: #fff;
    z-index: 111;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
`;

export const LogoHeaderStyled = styled.div`
    cursor: pointer;
    display: flex;
    align-items: start;
    gap: 4px;
    & div {
        & span:first-child {
            font-size: 16px;
            font-weight: 500;
        }
        & span:last-child {
            color: #F22929B3;
            font-size: 10px;
            font-style: italic;
        }
    }
`;
