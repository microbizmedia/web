import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import Pupup from '../pupup/pupup';

// eslint-disable-next-line react/prop-types
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header '
      id='sticky-menu'
    >
      {/* Pupup terms and conditions */}
      <Pupup />
      {/* Pupup terms and conditions */}
      <div className=' max-w-full m-auto lg:pl-[36px]  '>
        <div className='flex items-center justify-between h-[65px]'>
          {/* Header Logo */}
          <Logo mobileMenu={mobileMenu} />
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          // color={navColor}
          />
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className='flex items-center '>
            <HashLink to='/services#target-pricing' className='button w-full py-[20px] px-[36px] ml-[50px] rounded-0 border-colorPurple bg-colorPurple after:bg-violet-600 hover:border-violet-400 lg:inline-block'>
              Pricing
            </HashLink>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className={`mobile-menu-trigger `}
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header;
