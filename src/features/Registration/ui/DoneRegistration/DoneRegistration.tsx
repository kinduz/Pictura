import { Flex, Typography } from 'antd';
import { Button, ImageBlock } from '@shared/index';
import img from '@shared/assets/images/emoji_camera.png';

export const DoneRegistration = () => {
  return (
    <Flex vertical align="center">
      <ImageBlock height={200} width={200} src={img} />
      <Typography.Title style={{ marginTop: '24px' }} level={4}>
        Ура, регистрация прошла успешно, поздравляем!
        <br />
        Теперь вы можете пользоваться полным функционалом портала и творить магию
      </Typography.Title>
      <Button fontSize={18} type="link" text="Перейти в PinClone" />
    </Flex>
  );
};
