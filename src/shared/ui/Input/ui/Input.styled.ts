import styled from 'styled-components';

export const InputBlockStyled = styled('div')`
    display: flex;
    align-items: start;
    font-size: 16px !important;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    & > span {
        font-size: 16px;
        color: gray;
    }
`;
