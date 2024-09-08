import * as yup from 'yup';

export const resetYupScheme = yup.object().shape({
  password: yup.string().required('Поле обязательно к заполнению').min(8, 'Пароль должен состоять не менее чем из 8 символов'),
  confirmPassword: yup.string().required('Поле обязательно к заполнению').oneOf([yup.ref('password')], 'Пароли должны совпадать'),
});

export type ResetPasswordType = yup.InferType<typeof resetYupScheme>;
