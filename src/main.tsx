// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';

// React router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Page component
import CreateEmployee from './page/CreateEmployee';
import EmployeeList from './page/EmployeeList';

// Scripts
import { store } from './scripts/reduxToolkit/store';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
