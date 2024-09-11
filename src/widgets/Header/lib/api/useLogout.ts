import { AuthService } from '@shared/api';
import { useStore } from '@shared/helpers';

export const useLogout = () => {
  const { store } = useStore();

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      store.setAuth(false);
      store.removeUser();
    } catch (e: any) {
      console.log(e);
    }
  };

  return {
    handleLogout,
  };
};
