import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Hero from './pages/home/Hero.jsx';
import Work from './pages/common/Work.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/vendors/menu.css';
import './styles/style.css';

const router = createBrowserRouter([
  {
    path: "/micro-biz-media/",
    element: <App />,
    children: [
      {
        path: "/micro-biz-media/",
        element: <Hero />,
      },
      {
        path: "/micro-biz-media/work",
        element: <Work />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
