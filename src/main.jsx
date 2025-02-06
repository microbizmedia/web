import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/vendors/menu.css';
import './styles/style.css';
import Hero from './pages/home/Hero.jsx';
import Work from './pages/common/Work.jsx';
import Error_404 from './pages/common/Error_404';
import Process from './pages/common/Process';
import Services from './pages/common/Services';
import Careers from './pages/common/Carrers';
import About from './pages/common/About'
import Affiliate from './pages/common/Affiliate';
import Contact from './components/contact/Contact';
import Faq_01 from './pages/common/faq/Faq_01';
import PrivacyPolicy from './pages/common/PrivacyPolicy';

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
      },
      {
        path: "/micro-biz-media/*",
        element: <Error_404 />,
      },
      {
        path: "/micro-biz-media/process",
        element: <Process />,
      },
      {
        path: "/micro-biz-media/services",
        element: <Services />,
      },
      {
        path: "/micro-biz-media/careers",
        element: <Careers />,
      },
      {
        path: "/micro-biz-media/about",
        element: <About />,
      },
      {
        path: "/micro-biz-media/affiliate",
        element: <Affiliate />,
      },
      {
        path: "/micro-biz-media/contact",
        element: <Contact />,
      },
      {
        path: "/micro-biz-media/FAQ",
        element: <Faq_01 />,
      },
      {
        path: "/micro-biz-media/privacy",
        element: <PrivacyPolicy />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
