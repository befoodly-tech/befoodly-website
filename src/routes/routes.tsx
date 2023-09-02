// createBrowserRouter,
import { Navigate, createBrowserRouter } from 'react-router-dom';
import ComingSoon from '../pages/ComingSoon';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Landing from '../pages/Landing/Landing';
import Profile from '../pages/Profile/Profile';
import Checkout from '../pages/Checkout/Checkout';
import { getCookie } from '../utils/CookieHelper';
import { GenericGlobalData } from '../types/CommonType';
import { Box } from '@mui/material';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import Footer from '../components/Footer/Footer';

const commonGlobalData: GenericGlobalData = {
  phoneNumber: getCookie('phone'),
  sessionToken: getCookie('session'),
  customerId: getCookie('customerId'),
  s3Url: window.config?.S3_URL
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
    element: (
      <Box>
        <NavbarApp
          customerId={commonGlobalData.customerId}
          session={commonGlobalData.sessionToken}
        />
        <Landing {...commonGlobalData} />
        <Footer />
      </Box>
    ),
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
