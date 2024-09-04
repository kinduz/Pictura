import * as yup from 'yup';

export const RegYupSchema = yup.object().shape({
  first_name: yup.string().required('Данное поле является обязательным'),
  last_name: yup.string().required('Данное поле является обязательным'),
  login: yup.string().required('Данное поле является обязательным'),
  email: yup.string().required('Данное поле является обязательным').email('Кажется, почта написана неправильно...'),
  password: yup.string().required('Данное поле является обязательным').min(8, 'Пароль должен состоять не менее чем из 8 символов'),
  confirmPassword: yup.string().required('Данное поле является обязательным').oneOf([yup.ref('password')], 'Пароли должны совпадать'),
  accessPolicy: yup.boolean().oneOf([true], 'Необходимо согласие с пользовательским соглашением'),
});

export type RegistrationType = yup.InferType<typeof RegYupSchema>;
