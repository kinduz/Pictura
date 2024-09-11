import { Store } from '@app/store';
import { AuthResponse } from '@shared/api';
import axios from 'axios';

export const refreshToken = async (store: Store) => {
  const response = await axios.get<AuthResponse>(`${process.env.REACT_APP_API_BASE_URL}/refresh`, { withCredentials: true });
  localStorage.setItem('token', response.data.accessToken);
  store.setAuth(true);
  store.setUser(response.data.user);
};
