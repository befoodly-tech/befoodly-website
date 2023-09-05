// createBrowserRouter,
import { Navigate, createBrowserRouter } from 'react-router-dom';
import ComingSoon from '../pages/ComingSoon';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Profile from '../pages/Profile/Profile';
import Checkout from '../pages/Checkout/Checkout';
import AppHome from '../pages/AppHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Layout />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: (
          <>
            <Home />
          </>
        )
      },
      {
        path: '/about',
        element: (
          <>
            <About />
          </>
        )
      },
      {
        path: '/blog',
        element: (
          <>
            <Blog />
          </>
        )
      }
    ]
  },
  {
    path: '/comingsoon',
    element: (
      <>
        <ComingSoon />
      </>
    )
  },
  {
    path: '/app',
    element: <AppHome />,
    children: [
      {
        path: '/app/Login',
        element: <Navigate to="/app"></Navigate>
      },
      {
        path: '/app/SignUp',
        element: <Navigate to="/app"></Navigate>
      },
      {
        path: '/app/profile',
        element: <Profile />
      },
      {
        path: '/app/checkout',
        element: <Checkout />
      }
    ]
  }
]);

export default router;
