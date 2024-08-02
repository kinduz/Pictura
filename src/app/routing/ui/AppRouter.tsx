import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from '../lib';
import { SuspenseLoader } from '../../../shared';

function RoutesFunction() {
  return useRoutes(routeConfig);
}

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="app">
      {children}
    </div>
  );
};

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
