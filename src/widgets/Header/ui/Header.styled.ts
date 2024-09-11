import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header<{isAuth: boolean}>`
    width: 100%;
    height: 80px;
    background-color: #fff;
    z-index: 111;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    gap: ${({ isAuth }) => (!isAuth ? '16px' : '24px')};
    align-items: center;
    padding: 0 32px;
`;

export const LogoHeaderStyled = styled.div`
    cursor: pointer;
    display: flex;
    align-items: start;
    gap: 4px;
    transition: .3s all;
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
    &:hover {
        transform: scale(0.95);
    }
`;

export const HeaderLink = styled(NavLink)`
    font-size: 18px;
    color: #000;
    font-weight: 500;
    text-decoration: none;
    border-radius: 16px;
    padding: 8px 14px;
    &:hover {
        color: inherit;
    }
    &.active {
        color: #fff;
        background: #000;
    }
`;
