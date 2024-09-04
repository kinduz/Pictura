import { RegistrationComponent } from '../../features';
import { useSetTitle } from '../../shared/helpers/hooks';

const RegistrationPage = () => {
  useSetTitle({ title: 'Регистрация' });
  return (
    <RegistrationComponent />
  );
};

export default RegistrationPage;
