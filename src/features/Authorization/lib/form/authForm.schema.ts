import * as yup from 'yup';

export const AuthYupSchema = yup.object().shape({
  email: yup.string().required('Данное поле обязательно').email('Кажется, почта написана неправильно...'),
  password: yup.string().required('Данное поле обязательно').min(8, 'Пароль должен состоять не менее чем из 8 символов'),
  rememberMe: yup.boolean(),
});

export type AuthType = yup.InferType<typeof AuthYupSchema>;
