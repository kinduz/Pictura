import { Button } from 'antd';
import styled from 'styled-components';

type TProps = {
    fontSize?: number;
    width?: number;
}

export const ButtonStyled = styled(Button)<TProps>`
    display: flex;
    justify-content: center;
    width: ${(props) => props.width ?? 100}%;
    font-size: ${(props) => props.fontSize ?? 16}px;
`;
