import { RegistrationComponent } from '../../features';
import { useSetTitle } from '../../shared/helpers/hooks';

const RegistrationPage = () => {
  useSetTitle('Регистрация');
  return (
    <RegistrationComponent />
  );
};

export default RegistrationPage;
