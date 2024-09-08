import { AuthComponent } from '../../features';
import { useSetTitle } from '../../shared/helpers/hooks/useSetTitle';

const AuthorizationPage = () => {
  useSetTitle('Авторизация');
  return (
    <AuthComponent />
  );
};

export default AuthorizationPage;
