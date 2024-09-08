import { BaseRequest } from './Common.model';

export type BaseUserModel = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    login: string;
}

export type NewUserModel = BaseRequest & {
    accessToken: string;
    user: BaseUserModel;
}

export type UserLoginModel = BaseRequest & {
    user: BaseUserModel | Pick<BaseUserModel, 'email'>;
}
