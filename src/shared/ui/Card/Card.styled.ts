import styled from 'styled-components';

type TProps = {
  minHeight?: boolean;
  gap?: number;
  isMargin?: boolean;
}

export const CardStyled = styled('div')<TProps>`
    border-radius: 12px;
    box-shadow: 4px 4px 28px 12px rgba(34, 60, 80, .22);
    padding: 20px 20px 24px;
    min-height: ${(props) => (props.minHeight ? '400px' : '100%')};
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${(props) => props.gap}px;
    margin: 0 ${(props) => props.isMargin && 24}px;
`;
