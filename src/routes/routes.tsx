// createBrowserRouter,
import { Navigate, createBrowserRouter } from 'react-router-dom';
import ComingSoon from '../pages/ComingSoon';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Landing from '../pages/Landing/Landing';

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
  }
]);

export default router;
