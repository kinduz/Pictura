import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@shared/helpers';
import { AppRouter } from './routing';
import './styles/index.scss';
import { refreshToken } from './api';

const App = () => {
  const { store } = useStore();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      refreshToken(store);
    }
  }, []);
  return (
    <AppRouter />
  );
};

export default observer(App);
