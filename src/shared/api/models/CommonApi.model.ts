export type BaseRequest = {
    status: 'success' | 'failure',
    message: string;
    code: number;
}

export type BaseErrorRequest<T = undefined> = T extends undefined ? {
    status: number,
    message: string;
  } : T & {
    status: number,
    message: string;
  };
