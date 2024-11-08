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

//loaders
import { landingLoader, singleProductLoader, productsLoader } from './loaders';

//actions
import { registerAction, loginAction } from './action';

import { store } from './store';

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
        loader: landingLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        loader: productsLoader,
        errorElement: <ErrorElement />,
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
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
  return <RouterProvider router={router} />;
}

export default App;
