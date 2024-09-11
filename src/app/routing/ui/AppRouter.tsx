import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Layout, SuspenseLoader, useStore } from '@shared/index';
import { Header } from '@widgets/Header';
import { observer } from 'mobx-react-lite';
import { routeConfigPrivate, routeConfigPublic } from '../lib';

function RoutesFunction(props: {isAuth: boolean}) {
  const { isAuth } = props;
  return useRoutes(isAuth ? routeConfigPrivate : routeConfigPublic);
}

const AppRouter = () => {
  const { store } = useStore();
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Layout>
        <Header />
        <RoutesFunction isAuth={store.isAuth} />
      </Layout>
    </Suspense>
  );
};

export default observer(AppRouter);
