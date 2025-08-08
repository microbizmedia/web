import { Link } from 'react-router-dom';

const LogoDark = () => {
  return (
    <Link to='/web/'>
      <img
        className='hidden lg:block'
        src='/assets/img/logo_standard.png'
        alt='AIMass'
        width='135'
        height='24'
      />
      <img
        className='block lg:hidden'
        src='/assets/img/Mobile_icon.png'
        alt='AIMass'
       
      />
    </Link>
  );
};

export default LogoDark;
