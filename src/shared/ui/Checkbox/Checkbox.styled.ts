import { Checkbox } from 'antd';
import styled from 'styled-components';

export const CheckboxStyled = styled(Checkbox)`
    display: flex;
    gap: 4px;
    & > span {
        color: gray;
        text-align: start;
    }
`;
