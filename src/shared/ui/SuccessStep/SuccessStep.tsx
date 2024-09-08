import { Flex, Typography } from 'antd';
import { Button, ImageBlock } from '@shared/index';
import img from '@shared/assets/images/emoji_camera.png';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type TProps = {
  title: string;
  buttonText: string;
  toLink: string;
  description?: string;
}

export const SuccessStep:FC<TProps> = ({
  description, title, buttonText, toLink,
}) => {
  const navigate = useNavigate();
  return (
    <Flex vertical align="center">
      <ImageBlock height={200} width={200} src={img} />
      <Typography.Title style={{ marginTop: '24px' }} level={4}>
        {title}
        <br />
        {description || ''}
      </Typography.Title>
      <Button onClick={() => navigate(toLink)} fontSize={18} type="link" text={buttonText} />
    </Flex>
  );
};
