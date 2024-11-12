import { useState } from 'react';
import { Link } from 'react-router-dom';
import threadsIcon from '../footer/social_media_icons/threads_icon.png'
import xIcon from '../footer/social_media_icons/x_icon_b.png'
import instagramIcon from '../footer/social_media_icons/instagram_icon_b.png' 

// eslint-disable-next-line react/prop-types
const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [mobileSubMenu, setMobileSubMenu] = useState('');
  const [mobileSubMenuSub, setMobileSubMenuSub] = useState('');
  const [menuTitle, setMenuTitle] = useState('');

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu('');
    setMobileSubMenuSub('');
  };

  const handleSubMenu = (e, id) => {
    e.preventDefault();
    setMobileSubMenu(id);

    if (e.target.tagName === 'A') {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleSubMenuSub = (e, id) => {
    e.preventDefault();
    setMobileSubMenuSub(id);
    if (e.target.tagName === 'A') {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleGoBack = () => {
    if (mobileSubMenuSub) {
      setMobileSubMenuSub('');
      return;
    }
    if (mobileSubMenu) {
      setMobileSubMenu('');
      return;
    }
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
        <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
          <div onClick={handleGoBack} className='go-back'>
            <img
              className='dropdown-icon text-white'
              src='assets/img/icon-black-long-arrow-right.svg'
              alt='cheveron-right'
              width={16}
              height={16}
            />
            
          </div>
          <div className='current-menu-title'>{menuTitle}</div>
          <div onClick={handleMenu} className='mobile-menu-close'>
          &#11165;
          </div>
        </div>
        <ul className={`site-menu-main  ${color}`}>
          {/* Global navbar */}
          <li
            onClick={(e) => handleSubMenu(e, 1)}
            className='nav-item nav-item-has-children'
          >
            <Link to='/work' className='nav-link-item drop-trigger nav-link-item pt-4 lg:pt-0'>
              Work
            </Link>
          </li>
          <li className='nav-item text-center'>
            <Link to='/about' className='nav-link-item -l'>
              Services
            </Link>
          </li>
          <li
            onClick={(e) => handleSubMenu(e, 2)}
            className='nav-item nav-item-has-children'
          >
            <Link to='#' className='nav-link-item drop-trigger'>
              Process
            </Link>
            <ul
              className={`sub-menu ${mobileSubMenu === 2 && 'active'}`}
              id='submenu-2'
            >
              <li className='sub-menu--item'>
                <Link to='/services'>Services</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/service-details'>Service Details</Link>
              </li>
            </ul>
          </li>
          <li
            onClick={(e) => handleSubMenu(e, 3)}
            className='nav-item nav-item-has-children'
          >
            <Link to='#' className='nav-link-item drop-trigger nav-link-item '>
              Carrers
            </Link>
            <ul
              className={`sub-menu ${mobileSubMenu === 3 && 'active'}`}
              id='submenu-3'
            >
              <li
                onClick={(e) => handleSubMenuSub(e, 1)}
                className='sub-menu--item nav-item-has-children'
              >
                <Link to='#' data-menu-get='h3' className='drop-trigger'>
                  Blogs
                  <img
                    className='dropdown-icon'
                    src='assets/img/icon-black-cheveron-right.svg'
                    alt='cheveron-right'
                    width={16}
                    height={16}
                  />
                </Link>
                <ul
                  className={`sub-menu shape-none ${
                    mobileSubMenuSub === 1 && 'active'
                  }`}
                  id='submenu-4'
                >
                  <li className='sub-menu--item'>
                    <Link to='/blog'>blogs</Link>
                  </li>
                  <li className='sub-menu--item'>
                    <Link to='/blog-details'>blog details</Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={(e) => handleSubMenuSub(e, 2)}
                className='sub-menu--item nav-item-has-children'
              >
                <Link to='#' data-menu-get='h3' className='drop-trigger'>
                  Team
                  <img
                    className='dropdown-icon'
                    src='assets/img/icon-black-cheveron-right.svg'
                    alt='cheveron-right'
                    width={16}
                    height={16}
                  />
                </Link>
                <ul
                  className={`sub-menu shape-none ${
                    mobileSubMenuSub === 2 && 'active'
                  }`}
                  id='submenu-5'
                >
                  <li className='sub-menu--item'>
                    <Link to='/team'>Team</Link>
                  </li>
                  <li className='sub-menu--item'>
                    <Link to='/team-details'>Team Details</Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={(e) => handleSubMenuSub(e, 3)}
                className='sub-menu--item nav-item-has-children'
              >
                <Link to='#' data-menu-get='h3' className='drop-trigger'>
                  FAQ
                  <img
                    className='dropdown-icon'
                    src='assets/img/icon-black-cheveron-right.svg'
                    alt='cheveron-right'
                    width={16}
                    height={16}
                  />
                </Link>
                <ul
                  className={`sub-menu shape-none ${
                    mobileSubMenuSub === 3 && 'active'
                  }`}
                  id='submenu-6'
                >
                  <li className='sub-menu--item'>
                    <Link to='/faq-1'>FAQ-1</Link>
                  </li>
                  <li className='sub-menu--item'>
                    <Link to='/faq-2'>FAQ-2</Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={(e) => handleSubMenuSub(e, 4)}
                className='sub-menu--item nav-item-has-children'
              >
                <Link to='#' data-menu-get='h3' className='drop-trigger'>
                  Portfolio
                  <img
                    className='dropdown-icon'
                    src='assets/img/icon-black-cheveron-right.svg'
                    alt='cheveron-right'
                    width={16}
                    height={16}
                  />
                </Link>
                <ul
                  className={`sub-menu shape-none ${
                    mobileSubMenuSub === 4 && 'active'
                  }`}
                  id='submenu-7'
                >
                  <li className='sub-menu--item'>
                    <Link to='/portfolio'>Portfolio</Link>
                  </li>
                  <li className='sub-menu--item'>
                    <Link to='/portfolio-details'>Portfolio Details</Link>
                  </li>
                </ul>
              </li>
              <li className='sub-menu--item'>
                <Link to='/pricing' data-menu-get='h3' className='drop-trigger'>
                  Pricing
                </Link>
              </li>
              <li
                onClick={(e) => handleSubMenuSub(e, 5)}
                className='sub-menu--item nav-item-has-children'
              >
                <Link to='#' data-menu-get='h3' className='drop-trigger'>
                  Utilities
                  <img
                    className='dropdown-icon'
                    src='assets/img/icon-black-cheveron-right.svg'
                    alt='cheveron-right'
                    width={16}
                    height={16}
                  />
                </Link>
                <ul
                  className={`sub-menu shape-none ${
                    mobileSubMenuSub === 5 && 'active'
                  }`}
                  id='submenu-8'
                >
                  <li className='sub-menu--item'>
                    <Link to='/error-404'>Error 404</Link>
                  </li>
                  <li className='sub-menu--item'>
                    <Link to='/login'>Login</Link>
                  </li>
                  <li className='sub-menu--item'>
                    <Link to='/signup'>Signup</Link>
                  </li>
                  <li className='sub-menu--item'>
                    <Link to='/reset-password'>Reset Password</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='nav-item text-center pb-4 lg:pb-0'>
            <Link to='/contact' className='nav-link-item nav-link-item '>
              About
            </Link>
          </li>
          <li className='dropdown-menu-social-media-icons'>
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
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
