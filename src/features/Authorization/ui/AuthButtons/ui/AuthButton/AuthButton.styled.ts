import styled from 'styled-components';

type TProps = {
    backgroundColor: string;
}

export const AuthButtonStyled = styled.div<TProps>`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor}
`;

export const IconStyled = styled.div`
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
`;
