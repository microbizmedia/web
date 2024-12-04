import { Route, Routes } from 'react-router-dom';
import Hero from './components/sections/home/Hero';
import Work from './pages/common/Work';
import Contact from './pages/common/Contact';
import Error_404 from './pages/common/Error_404';
import Process from './pages/common/Process';
import Services from './pages/common/Services';
import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';
import Careers from './pages/common/Carrers';
import About from './pages/common/About'

function App() {
  // Init JOS Animation
  useJOSAnimation();
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='micro-biz-media' element={<Hero />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />   
          <Route path='process' element={<Process />} />
          <Route path='services' element={<Services />} />
          <Route path='error-404' element={<Error_404 />} />
          <Route path='careers' element={<Careers />} />
          <Route path='*' element={<Error_404 />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
