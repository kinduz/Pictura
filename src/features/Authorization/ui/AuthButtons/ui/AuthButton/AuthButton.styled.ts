import styled from 'styled-components';

type TProps = {
    backgroundColor: string;
}

export const AuthButtonStyled = styled.div<TProps>`
    width: 300px;
    padding: 8px 16px;
    border-radius: 12px;
    box-shadow: 6px 8px 16px 2px rgba(34, 60, 80, 0.2);
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    cursor: pointer;
    transition: .3s transform;
    &:hover {
        transform: scale(1.02);
    }
`;

type TContentProps = {
    textColor: string;
};

export const ContentStyled = styled.div<TContentProps>`
    & > svg {
        width: 28px;
        height: 28px;
    }
    & span {
        font-size: 16px;
        font-weight: 550;
        color: ${(props) => props.textColor}
    }
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: start;
`;
