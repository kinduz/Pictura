import { PictTags } from '@shared/api';
import * as yup from 'yup';

export const PictInfoFormSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  link: yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Введите корректную ссылку',
  ),
  board: yup.string(),
  tags: yup.mixed<PictTags[]>(),
  allowComments: yup.boolean(),
  allowDownload: yup.boolean(),
});

export type PictInfoFormSchemaType = yup.InferType<typeof PictInfoFormSchema>;
