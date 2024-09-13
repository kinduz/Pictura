import { Link } from 'react-router-dom';
import styled from 'styled-components';

type TLinkProps = {
    fontSize?: number;
}

export const LinkStyled = styled(Link)<TLinkProps>`
    color: blue;
    font-size: ${(props) => props.fontSize || 14}px;
`;

export const ErrorInputMessage = styled('span')`
    color: red !important;
    font-size: 14px !important;
`;

export const Container = styled('div')`
    padding: 0 64px;
    width: 100%;
`;
