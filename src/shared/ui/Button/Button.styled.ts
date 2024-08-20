import { Button } from 'antd';
import styled from 'styled-components';

type TProps = {
    width?: number;
}

export const ButtonStyled = styled(Button)<TProps>`
    display: flex;
    justify-content: center;
    width: ${(props) => props.width ?? 100}%;
`;
