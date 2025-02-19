import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import PrivacyPupup from '../pupup/PrivacyPupUp';
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  
  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.classList.remove("jos-active"); // Remove animation class
        setTimeout(() => {
          element.classList.add("jos-active"); // Re-add animation class to trigger it
        }, 50);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header
      className='site-header '
      id='sticky-menu'
    >
      {/* Pupup terms and conditions */}
      <PrivacyPupup />
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
            <HashLink to="/web/services#target-pricing"  className='button w-full py-[20px] px-[36px] ml-[50px] rounded-0 border-colorPurple bg-colorPurple after:bg-violet-600 hover:border-violet-400 lg:inline-block'>
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
