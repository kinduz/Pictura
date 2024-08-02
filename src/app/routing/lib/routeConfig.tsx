import { RouteObject } from 'react-router-dom';
import { RoutePaths } from './routePaths';
import {
  AboutPageLazy,
  AuthorizationPageLazy,
  MainPageLazy,
  NotFoundPageLazy,
  RegistrationPageLazy,
} from '../../../pages';

export const routeConfig: RouteObject[] = [
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
  {
    path: RoutePaths.authorization,
    element: <AuthorizationPageLazy />,
  },
  {
    path: RoutePaths.registration,
    element: <RegistrationPageLazy />,
  },
];
