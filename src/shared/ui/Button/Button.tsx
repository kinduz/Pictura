import { FC } from 'react';
import { ButtonProps, Flex } from 'antd';
import { ButtonStyled } from './Button.styled';

type TProps = ButtonProps & {
    text: string;
    width?: number;
};

export const Button: FC<TProps> = (props) => {
  const { text, width, ...otherProps } = props;
  return (
    <Flex justify="center">
      <ButtonStyled width={width} size="large" {...otherProps}>{text}</ButtonStyled>
    </Flex>
  );
};
