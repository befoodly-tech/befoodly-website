// createBrowserRouter,
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Profile from '../pages/Profile/Profile';
import Checkout from '../pages/Checkout/Checkout';
import AppHome from '../pages/AppHome';
import { GenericGlobalData } from '../types/CommonType';
import { getCookie } from '../utils/CookieHelper';
import TrackOrder from '../pages/TrackOrder/TrackOrder';
import ComingSoon from '../pages/ComingSoon/ComingSoon';
import Kitchen from '../pages/Kitchen/Kitchen';

const commonGlobalData: GenericGlobalData = {
  phoneNumber: getCookie('phone'),
  sessionToken: getCookie('session'),
  customerId: getCookie('customerId'),
  s3Url: window?.config?.S3_URL
};

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
        path: '/ourkitchen',
        element: (
          <>
            <Kitchen />
          </>
        )
      }
    ]
  },
  {
    path: '/app',
    element: <AppHome {...commonGlobalData} />,
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
        element: (
          <Checkout customerId={commonGlobalData.customerId} s3Url={commonGlobalData.s3Url} />
        )
      },
      {
        path: '/app/track-order',
        element: <TrackOrder customerId={commonGlobalData.customerId} />
      }
    ]
  }
]);

export default router;
