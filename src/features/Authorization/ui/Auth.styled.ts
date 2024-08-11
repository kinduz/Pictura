import styled from 'styled-components';

export const LogoStyled = styled.div`
    position: relative;
    & svg {
        color: var(--logo-color);
        font-size: 56px;
    }
`;

export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
    font-size: 20px;
    width: 100%;
`;
