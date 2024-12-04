import { useState } from 'react';
import { Link } from 'react-router-dom';
import threadsIcon from '../footer/social_media_icons/threads_icon.png'
import xIcon from '../footer/social_media_icons/x_icon_b.png'
import instagramIcon from '../footer/social_media_icons/instagram_icon_b.png'


// eslint-disable-next-line react/prop-types
const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [mobileSubMenu, setMobileSubMenu] = useState('');

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu('');
  };




  return (
    <div className='menu-block-wrapper'>
      <div
        onClick={handleMenu}
        className={`menu-overlay ${mobileMenu && 'active'}`}
      />
      <nav
        className={`menu-block ${mobileMenu && 'active'}`}
        id='append-menu-header'
      >

        <ul className={`site-menu-main py-4 ${color}`}>
          {/* Global navbar */}
          <li
            onClick={handleMenu}
            className='nav-item'
          >
            <Link to='/work' className='nav-link-item '>
              Work
            </Link>
          </li>
          <li onClick={handleMenu}
            className='nav-item'>
            <Link to='/services' className='nav-link-item '>
              Services
            </Link>
          </li>
          <li
            onClick={handleMenu}
            className='nav-item'
          >
            <Link to='/process' className='nav-link-item'>
              Process
            </Link>
          </li>
          <li
            onClick={handleMenu}
            className='nav-item '
          >
            <Link to='/careers' className='nav-link-item '>
              Careers
            </Link>
          </li>
          <li className='nav-item'
            onClick={handleMenu}
          >
            <Link to='/about' className='nav-link-item '>
              About
            </Link>
          </li>
        </ul>

        <div className='dropdown-menu-social-media-icons'>
          <img
            src={threadsIcon}
            alt='hero-dashboard'
            className='  size-10'
          />
          <img
            src={xIcon}
            alt='hero-dashboard'
            className='  size-10'
          />
          <img
            src={instagramIcon}
            alt='hero-dashboard'
            className='  size-10'
          />
        </div>
        <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
          <div onClick={handleMenu} className='mobile-menu-close rotate-[-90deg]'>
            &#10095;
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
