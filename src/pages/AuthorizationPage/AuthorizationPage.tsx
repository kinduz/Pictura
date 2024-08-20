import { AuthComponent } from '../../features/Authorization';
import { useSetTitle } from '../../shared';

const AuthorizationPage = () => {
  useSetTitle({ title: 'Авторизация' });
  return (
    <AuthComponent />
  );
};

export default AuthorizationPage;
