import { Link } from 'react-router-dom';
import logoStandard from '../../assets/img/logo_standard.png';
import logoMobile from '../../assets/img/Mobile_icon.png';

const LogoDark = () => {
  return (
    <Link to='/web/'>
      <img
        className='hidden lg:block'
        src={logoStandard}
        alt='Logo desktop'
        width='135'
        height='24'
      />
      <img
        className='block lg:hidden'
        src={logoMobile}
        alt='Logo mobile'
       
      />
    </Link>
  );
};

export default LogoDark;
