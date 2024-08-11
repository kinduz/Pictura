import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfigPrivate, routeConfigPublic } from '../lib';
import { Layout, SuspenseLoader } from '../../../shared';

function RoutesFunction() {
  const token = localStorage.getItem('token');
  return useRoutes(token ? routeConfigPrivate : routeConfigPublic);
}

const AppRouter = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Layout>
        <RoutesFunction />
      </Layout>
    </Suspense>
  );
};

export default AppRouter;
