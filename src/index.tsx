import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DefaultOptions, QueryClient, QueryClientProvider } from 'react-query';
import { App, Store } from './app';

interface State {
  store: Store
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const config: {
  defaultOptions: DefaultOptions;
} = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

const queryClient = new QueryClient(config);

const store = new Store();

export const Context = createContext<State>({
  store,
});

root.render(
  <Context.Provider value={{ store }}>
    <QueryClientProvider contextSharing client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Context.Provider>
  ,
);
