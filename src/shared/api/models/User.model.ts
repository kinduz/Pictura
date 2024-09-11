import { BaseRequest } from './CommonApi.model';

export type BaseUserModel = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    login: string;
}

export type AuthRequest = {
    email: string;
    password: string;
}

export type AuthResponse = BaseRequest & {
    accessToken: string;
    user: BaseUserModel;
}

export type RegistrationRequest = {
    email: string;
    first_name: string;
    last_name: string;
    login: string;
    password: string;
}
