import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import Applied_job from './Components/Applied_job/Applied_job';

const router = createBrowserRouter([
   {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/Products.json')
      },
      {
        path: '/viewDetails/:nam',
        element: <ViewDetails />,
        loader: () => fetch('/Products.json'),
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/applying-job',
        element: <Applied_job />,
        loader: () => fetch('/Products.json')
      },
      {
        path: '/blog',
        element: <Blog />
      },
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
