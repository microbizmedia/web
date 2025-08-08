import React, { createContext } from 'react';
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
import TermsOfService from './pages/common/TermsOfService.jsx';
import TermsOfServiceDocument from './pages/common/TermsOfService.jsx';
import CareersAplications from './components/contact/CarrersAplications.jsx';

const gitHubUrl = '/web/';

const router = createBrowserRouter([
  {
    path: gitHubUrl,
    element: <App />,
    children: [
      {
        path: gitHubUrl,
        element: <Hero />,
      },
      {
        path: gitHubUrl + "work",
        element: <Work />,
      },
      {
        path: gitHubUrl + "*",
        element: <Error_404 />,
      },
      {
        path: gitHubUrl + "process",
        element: <Process />,
      },
      {
        path: gitHubUrl + "services",
        element: <Services />,
      },
      {
        path: gitHubUrl + "careers",
        element: <Careers />,
      },
      {
        path: gitHubUrl + "about",
        element: <About />,
      },
      {
        path: gitHubUrl + "affiliate",
        element: <Affiliate />,
      },
      {
        path: gitHubUrl + "contact",
        element: <Contact />,
      },
      {
        path: gitHubUrl + "FAQ",
        element: <Faq_01 />,
      },
      {
        path: gitHubUrl + "privacy",
        element: <PrivacyPolicy />,
      },
      
       {
        path: gitHubUrl + "TermsOfService",
        element: <TermsOfService />,
      },
      {
        path: gitHubUrl + "careers/apply/:jobTitle",
        element: <CareersAplications />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
