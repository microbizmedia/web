import { Link, useLocation } from 'react-router-dom';
import logoStandard from '../../assets/img/logo_standard.png'
import threadsIcon from '../footer/social_media_icons/threads_icon.png'
import xIcon from '../footer/social_media_icons/x_icon_b.png'
import instagramIcon from '../footer/social_media_icons/instagram_icon_b.png'
import backgroundPicture from '../../assets/img/Segment_footer_bg_01.png'
import footerGraphic from '../../assets/img/footer_graphic_01.png'



const Footer_01 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const location = useLocation();
  const hiddenRoutes = ["/careers"];
  return (
    <>



      {hiddenRoutes.includes(location.pathname) ? null : (
        <div className='global-container relative jos text-center pb-10 z-40'>
          <h2 className=' pb-6'>Let's Start Your Story</h2>
          <Link
            to='/contact'
            className='button-micro rounded-[10px] border-1 border-#c7c5e2 bg-colorPurple py-4 after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white' >
            Start A Free Consultation
          </Link>
        </div>
      )}






      <footer className=' relative '>
        {/* Footer Top */}

        {/* Footer Text Slider */}
        {hiddenRoutes.includes(location.pathname) ? null : (

          
        <div className='relative'>
          <img
          src={backgroundPicture}
            className='absolute  
               bottom-[0%]
             '

            />

            <img
              src={footerGraphic}
              alt='footer-graphic-website-images'
              className='relative   w-[100%] bottom-[100%] bg-bottom'

            />
            

          
          </div>
        
        
     
        )}

      


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
            <p className='text-base '>
              Our mission is to empower businesses by providing
              innovative online solutions that enhance their digital presence.
            </p>

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
                  to='/'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/pricing'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  pricing
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  Contact
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
                <Link
                  to='/signup'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to='/login'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='/error-404'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  404 Not found
                </Link>
              </li>
              <li>
                <Link
                  to='/reset-password'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed font-light'
                >
                  Password Reset
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
        {/* Footer Center */}
        <div className='h-[1px] w-full bg-[#DBD6CF] opacity-25' />
        {/* Footer Bottom */}
        <div className='py-6 text-center'>
          <p>
            © {new Date().getFullYear()} MicroBiz Media. All Rights Reserved.
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      {/* <div className='orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]'></div> */}
      {/* Footer Background Shape 2  */}
      {/* <div className='orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]'></div> */}
    </footer >
    </>
  );
};

export default Footer_01;
