import { useSetTitle } from '@shared/helpers';
import { AuthComponent } from '../../features';

const AuthorizationPage = () => {
  useSetTitle('Авторизация');
  return (
    <AuthComponent />
  );
};

export default AuthorizationPage;
