import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

import { ErrorElement } from './components';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//loaders
import {
  landingLoader,
  singleProductLoader,
  productsLoader,
  checkoutLoader,
  orderLoader,
} from './loaders';

//actions
import { registerAction, loginAction, checkoutFormAction } from './action';

import { store } from './store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        loader: productsLoader(queryClient),
        errorElement: <ErrorElement />,
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        loader: checkoutLoader(store),
        action: checkoutFormAction(store, queryClient),
        element: <Checkout />,
      },
      {
        path: 'orders',
        loader: orderLoader(store, queryClient),
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    action: loginAction(store),
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    action: registerAction,
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
