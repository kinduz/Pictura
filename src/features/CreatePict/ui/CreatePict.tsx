import { useSetTitle } from '@shared/helpers';
import { useState } from 'react';
import { Button } from '@shared/ui';
import { Flex } from 'antd';
import { CreatePictForm, CreatePictStyled } from './CreatePict.styled';
import { UploadMedia } from './UploadMedia';
import { PictInfoForm } from './PictInfoForm';
import { PictInfoFormSchemaType } from './PictInfoForm/model';

export const CreatePict = () => {
  useSetTitle('Создание пикта');
  const [isDisable, setIsDisable] = useState(true);

  const submitForm = (data: PictInfoFormSchemaType) => {
    console.log(data);
  };

  return (
    <CreatePictStyled vertical gap={32}>
      <Flex align="center" justify="space-between">
        <span>Создание пикта</span>
        {!isDisable && (
          <Button text="Сохранить" />
        )}
      </Flex>
      <CreatePictForm align="center" gap={64} justify="center">
        <UploadMedia setNotDisable={() => setIsDisable(false)} />
        <PictInfoForm submitForm={submitForm} isDisable={isDisable} />
      </CreatePictForm>
    </CreatePictStyled>
  );
};
