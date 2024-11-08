import { Link } from 'react-router-dom';
import logoDark from '../../assets/img/logo-dark.png';
import logoLight from '../../assets/img/logo-light.png';
import logoStandard from '../../assets/img/logo_standard.png';
import logoMobile from '../../assets/img/logo_mobile.png';


// eslint-disable-next-line react/prop-types
const LogoDark = ({ light, }) => {
  console.log("hello")
  return (
    <Link to='/micro-biz-media'>
      <img
        // src={light ? logoLight : logoDark}
        className='hidden lg:block'
        src={logoStandard}
        alt='AIMass'
        width='156'
        height='24'
      />
      <img
        className='block lg:hidden'
        src={logoMobile}
        alt='AIMass'
        width='60'
        height='24'
      />
      
    </Link>
  );
};

export default LogoDark;
