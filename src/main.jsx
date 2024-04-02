import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css'

import Home from './routes/home';
import ErrorPage from './error-page';
import About from './routes/about';
import Layout from './layout/app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <About /> },
      { path: '/contact', element: <About /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}