import { Link } from 'react-router-dom';
import logoStandard from '../../assets/img/logo_standard.png';
import logoMobile from '../../assets/img/Mobile_icon.png';

// eslint-disable-next-line react/prop-types
const LogoDark = () => {
  return (
    <Link to='/micro-biz-media/'>
      <img
        className='hidden lg:block'
        src={logoStandard}
        alt='AIMass'
        width='135'
        height='24'
      />
      <img
        className='block lg:hidden'
        src={logoMobile}
        alt='AIMass'
       
      />
    </Link>
  );
};

export default LogoDark;
