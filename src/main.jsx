import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Contact from './pages/Contact.jsx';
import JsonGuides from './pages/JsonGuides.jsx';
import JsonBasics from './pages/JsonBasics.jsx';
import CommonJsonErrors from './pages/CommonJsonErrors.jsx';
import "./index.css";

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/contact', element: <Contact /> },

  // New content routes
  { path: '/guides', element: <JsonGuides /> },
  { path: '/guides/what-is-json', element: <JsonBasics /> },
  { path: '/guides/common-json-errors', element: <CommonJsonErrors /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
