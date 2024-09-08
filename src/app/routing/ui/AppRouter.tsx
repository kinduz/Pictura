import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Layout, SuspenseLoader } from '@shared/index';
import { Header } from '@widgets/Header';
import { routeConfigPrivate, routeConfigPublic } from '../lib';

function RoutesFunction() {
  const token = localStorage.getItem('token');
  return useRoutes(token ? routeConfigPrivate : routeConfigPublic);
}

const AppRouter = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Layout>
        <Header />
        <RoutesFunction />
      </Layout>
    </Suspense>
  );
};

export default AppRouter;
