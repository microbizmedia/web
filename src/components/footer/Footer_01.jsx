import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoStandard from '../../assets/img/logo_standard.png'
import threadsIcon from '../footer/social_media_icons/threads_icon.png'
import xIcon from '../footer/social_media_icons/x_icon_b.png'
import instagramIcon from '../footer/social_media_icons/instagram_icon_b.png'
import backgroundPicture from '../../assets/img/Segment_footer_bg_01.png'
import footerGraphic from '../../assets/img/footer_graphic_01_v1.png'


const Footer_01 = () => {
  const location = useLocation();
  const hiddenRoutes = ["/", "/micro-biz-media/", "/micro-biz-media", "/work", "/services", "/process", "/about", "/privacy"];
  return (
    <>


      {hiddenRoutes.includes(location.pathname) ? (
        <div className='global-container relative jos text-center py-10 md:py-16 z-40'>
          <h2 className=' pb-6'>Let's Start Your Story</h2>
          <Link
            to='/contact'
            className='button-micro rounded-[10px] border-1 border-#c7c5e2 bg-colorPurple py-4 after:bg-violet-600 hover:border-violet-600 hover:text-white' >
            Start A Free Consultation
          </Link>
        </div>
      ) : null}


      <footer className=' relative '>
        {/* Footer Top pictures */}
        {hiddenRoutes.includes(location.pathname) ? (
        <div className='relative'>
          <img
            src={backgroundPicture}
            className='absolute bottom-[0%]'
            />
            <img
              src={footerGraphic}
              alt='footer-graphic-website-images'
              className='relative   w-[100%] bottom-[100%] bg-bottom'
            /> 
          </div>   
        ) :  null}

      


      {/* Footer Top */}
      <div className='global-container pt-8 '>
        {/* <div className='h-[1px] w-full bg-[#DBD6CF]' /> */}
        {/* Footer Center */}
        {/* <div className='lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]'> */}
        <div className='flex flex-wrap mb-4 md:justify-between'>
          {/* Footer Widget */}
          <div className='flex flex-col mt-2 gap-y-4 p-3 md:max-w-60'>
            <Link to='/' className='inline-block'>
              <img
                src={logoStandard}
                alt='logo'
                width={150}
                height={24}
              />
            </Link>
            <li className='list-none'>
              Our mission is to empower businesses by providing
              innovative online solutions that enhance their digital presence.
            </li>

          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-4 p-3'>
            {/* Footer Title */}
            <h4 className='text-[26px] text-bold capitalize'>
              Menu
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className='flex flex-col  capitalize'>
              <li>
                <Link
                  to='/work'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  work
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/process'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to='/careers'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-4 p-3'>
            {/* Footer Title */}
            <h4 className='text-[26px] text-bold capitalize '>
              Legal
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className='flex flex-col  capitalize'>
            <li>
                <HashLink
                  to='/services#target-pricing'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  Pricing
                </HashLink>
              </li>
              <li>
                <Link
                  to='/FAQ'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to='/affiliate'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  Affilliate Program
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy'
                  className='transition-all duration-300 ease-linear hover:text-violet-400 font-light'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-4 p-3'>
            {/* Footer Title */}
            <h4 className='text-[26px] text-bold capitalize mr-10'>
              Social Links
            </h4>
            {/* Footer Title */}
            {/* Footer Subscriber Form */}
            <div className='flex justify-between'>
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
            {/* Footer Subscriber Form */}
          </div>
          {/* Footer Widget */}
        </div>
        </div>
        {/* Footer Center */}
        <div className='h-[1px] w-[96%] m-auto bg-[#DBD6CF] opacity-25 ' />
        {/* Footer Bottom */}
        
          <p className='py-6 text-center text-sm'>
            © {new Date().getFullYear()} MicroBiz Media. All Rights Reserved.
          </p>
        
        {/* Footer Bottom */}
      
      {/* Footer Background Shape 1  */}
      {/* <div className='orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]'></div> */}
      {/* Footer Background Shape 2  */}
      {/* <div className='orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]'></div> */}
    </footer >
    </>
  );
};

export default Footer_01;
