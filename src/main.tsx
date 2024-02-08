// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Page component
import CreateEmployee from './page/CreateEmployee';
import EmployeeList from './page/EmployeeList';

// Style
import './main.scss';

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateEmployee />,
    errorElement: 'Error !',
  },
  {
    path: '/list',
    element: <EmployeeList />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
