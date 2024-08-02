/* eslint-disable no-unused-vars */

export enum AppRoutes {
  AUTHORIZATION = 'authorization',
  REGISTRATION = 'registration',

  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.AUTHORIZATION]: '/auth',
  [AppRoutes.REGISTRATION]: '/registration',

  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/*',
  [AppRoutes.MAIN]: '/',
};
