import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Checkbox, Input, Select } from '@shared/ui';
import { FC, useEffect } from 'react';
import { Flex } from 'antd';
import { PictInfoFormSchema, PictInfoFormSchemaType } from '../model';
import { PictInfoFormStyled } from './PictInfoForm.styled';

type TProps = {
  isDisable: boolean;
  // eslint-disable-next-line no-unused-vars
  submitForm: (data: PictInfoFormSchemaType) => void;
}

export const PictInfoForm:FC<TProps> = ({ isDisable, submitForm }) => {
  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(PictInfoFormSchema),
  });

  useEffect(() => {
    control._disableForm(isDisable);
  }, [isDisable]);

  return (
    <PictInfoFormStyled onSubmit={handleSubmit(submitForm)}>
      <Input control={control} label="Название" name="name" placeholder="Добавить название" />
      <Input control={control} label="Описание" type="textarea" name="description" placeholder="Добавить описание" />
      <Input control={control} label="Ссылка" name="link" placeholder="Добавить ссылку" />
      <Input control={control} label="Доска" name="board" placeholder="Выберите доску" />
      <Select
        control={control}
        label="Теги"
        name="tags"
        placeholder="Напишите тег (пользователи не будут их видеть)"
      />
      <Flex>
        <Checkbox control={control} label="Разрешить комментарии?" name="allowComments" />
        <Checkbox control={control} label="Разрешить скачивание?" name="allowDownload" />
      </Flex>
      <button type="submit">123</button>
    </PictInfoFormStyled>
  );
};
