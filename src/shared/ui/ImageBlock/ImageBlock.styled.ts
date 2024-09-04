import styled from 'styled-components';

type TProps = {
    height?: number;
    width?: number;
}

export const Image = styled.div<TProps>`
    height: ${(props) => (props.height ? `${props.height}px` : '100%')};
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    & > img {
        width: 100%;
        height: 100%;
    }
`;
