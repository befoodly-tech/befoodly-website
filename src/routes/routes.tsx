// createBrowserRouter,
import { Navigate, createBrowserRouter } from 'react-router-dom';
import ComingSoon from '../pages/ComingSoon';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Landing from '../pages/Landing/Landing';
import Profile, { ProfileProps } from '../pages/Profile/Profile';
import Checkout from '../pages/Checkout/Checkout';

const user: ProfileProps = {
  email: 'chouhanpiyush142@gmail.com',
  firstName: 'Piyush',
  lastName: 'Chouhan',
  phoneNumber: '7415045625',
  profilePicture: 'https://pictures-befoodly.s3.ap-south-1.amazonaws.com/profile-pictures/Panda.png'
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
    path: '/menu',
    element: (
      <>
        <Landing />
      </>
    ),
    children: [
      {
        path: '/menu/Login',
        element: <Navigate to="/menu"></Navigate>
      },
      {
        path: '/menu/SignUp',
        element: <Navigate to="/menu"></Navigate>
      }
    ]
  },
  {
    path: '/profile',
    element: <Profile {...user} />
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
]);

export default router;
