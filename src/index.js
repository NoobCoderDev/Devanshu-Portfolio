import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ExperiencePage from './Pages/ExperiencePage';
import ContactPage from './Pages/ContactPage';
import ProjectPage from './Pages/ProjectPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter(
  [
    {
      path :'/',
      element: <HomePage />
    },
    {
      path :'/Home',
      element: <HomePage />
    },
    {
      path :'/About',
      element: <AboutPage />
    },
    {
      path :'/Experience',
      element: <ExperiencePage />
    },
    {
      path :'/Projects',
      element: <ProjectPage />
    },
    {
      path :'/Contact',
      element: <ContactPage />
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
