// createBrowserRouter,
import { createBrowserRouter } from 'react-router-dom';
import ComingSoon from '../pages/ComingSoon';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

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
      }
    ]
  }
]);

export default router;
