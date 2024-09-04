export type BaseUserModel = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    login: string;
}

export type NewUserModel = {
    status: 'success' | 'failure',
    message: string;
    accessToken: string;
    user: BaseUserModel;
}
