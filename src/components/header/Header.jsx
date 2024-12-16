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
      className='site-header site-header--absolute is--white '
      id='sticky-menu'
    >
      {/* Pupup terms and conditions */}
      <Pupup />
      {/* Pupup terms and conditions */}
      <div className=' max-w-[1024px] m-auto lg:px-[1rem] '>
        <div className='flex items-center justify-between gap-x-8'>
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
            <HashLink to='/services#target-pricing' className='button w-full p-4 rounded-0 border-colorPurple bg-colorPurple after:bg-violet-600 hover:border-violet-400 lg:inline-block'>
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
