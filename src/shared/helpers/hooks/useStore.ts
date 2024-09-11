import { useContext } from 'react';
import { Context } from '../../../index';

export const useStore = () => {
  const { store } = useContext(Context);
  return {
    store,
  };
};
