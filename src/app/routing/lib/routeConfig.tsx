import { Navigate, RouteObject } from 'react-router-dom';
import {
  AboutPageLazy,
  AuthorizationPageLazy,
  MainPageLazy,
  NotFoundPageLazy,
  RegistrationPageLazy,
  VerificationEmailPageLazy,
  ResetPasswordPageLazy,
} from '@pages/index';
import { RoutePaths } from './routePaths';

export const routeConfigPublic: RouteObject[] = [
  {
    path: RoutePaths.authorization,
    element: <AuthorizationPageLazy />,
  },
  {
    path: RoutePaths.registration,
    element: <RegistrationPageLazy />,
  },
  {
    path: RoutePaths.verification_email,
    element: <VerificationEmailPageLazy />,
  },
  {
    path: RoutePaths.reset_password,
    element: <ResetPasswordPageLazy />,
  },
  {
    path: '*',
    element: <Navigate to={RoutePaths.authorization} />,
  },
];

export const routeConfigPrivate: RouteObject[] = [
  {
    path: RoutePaths.main,
    element: <MainPageLazy />,
  },
  {
    path: RoutePaths.about,
    element: <AboutPageLazy />,
  },
  {
    path: RoutePaths.notFound,
    element: <NotFoundPageLazy />,
  },
];
