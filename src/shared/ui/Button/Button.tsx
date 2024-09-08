import { FC } from 'react';
import { ButtonProps, Flex } from 'antd';
import { ButtonStyled } from './Button.styled';

type TProps = ButtonProps & {
    text: string;
    fontSize?: number;
    width?: number;
};

export const Button: FC<TProps> = (props) => {
  const {
    text, width, fontSize, size, ...otherProps
  } = props;
  return (
    <Flex justify="center">
      <ButtonStyled fontSize={fontSize} width={width} size={size || 'large'} {...otherProps}>{text}</ButtonStyled>
    </Flex>
  );
};
