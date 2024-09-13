import styled from 'styled-components';

export const LayoutStyled = styled('div')<{isAuth: boolean}>`
    width: 100%;
    height: 100%;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ isAuth }) => !isAuth && '32px'};
`;
