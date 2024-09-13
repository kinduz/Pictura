import { Flex } from 'antd';
import styled from 'styled-components';

export const CreatePictStyled = styled(Flex)`
    width: 100%;
    & > div:first-child {
        & > span:first-child {
            font-size: 20px;
            font-weight: 500;
        }
        padding: 12px 64px 12px 90px;
        width: 100%;
        font-size: 20px;
        border-bottom: 1px solid #CDCDCD;
        border-top: 1px solid #CDCDCD;
    }
`;

export const CreatePictForm = styled(Flex)`
    width: 100%;
`;
