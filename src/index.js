import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import UserProfile from './pages/UserProfile';
import Projects from './pages/Projects';

const router=createBrowserRouter([
  {path: '/',
  element: <Layout/>,
  errorElement:<Layout/>,
  children: [
    {index:true, element:<Home />},
    {path: "posts/:id", element: <PostDetail/>},
    {path: "profile", element: <UserProfile/>},
    {path: "projects", element: <Projects/>},

  ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
