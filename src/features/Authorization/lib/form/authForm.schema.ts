import * as yup from 'yup';

export const AuthYupSchema = yup.object().shape({
  email: yup.string().required('Данное поле обязательно').email(),
  password: yup.string().required('Данное поле обязательно'),
  rememberMe: yup.boolean(),
});
