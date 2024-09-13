import { Flex } from 'antd';
import styled from 'styled-components';

export const UploadMediaStyled = styled('div')`
    background-color: #e9e9e9;
    padding: 32px;
    position: relative;
    border: 3px dashed #DADADA;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    width: 320px;
    height: 450px;
    align-items: center;
    & input {
        font-size: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background: inherit;
        opacity: 0;
    }
`;

export const UploadImageInfo = styled(Flex)`
    height: 100%;
    padding: 64px 0;
    text-align: center;
`;

export const UploadImageDescription = styled('span')`
    font-size: 14px;
`;
