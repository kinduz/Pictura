import { AxiosResponse } from 'axios';
import $api from '../api.config';
import { AuthResponse, RegistrationRequest } from '../models';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth', { email, password });
  }

  static async registration(data: RegistrationRequest): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', { ...data });
  }

  static async logout(): Promise<AxiosResponse> {
    return $api.post('/logout');
  }
}
