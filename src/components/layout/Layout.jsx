import { Outlet } from 'react-router-dom';
import Footer_01 from '../footer/Footer_01';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className='page-wrapper relative z-[1]'>
      {/*...::: Header Start :::... */}
      <Header />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
};

export default Layout;
