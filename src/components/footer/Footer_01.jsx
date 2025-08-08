import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoStandard from '/assets/img/logo_standard.png'
import threadsIcon from '../footer/social_media_icons/threads_icon.png'
import xIcon from '../footer/social_media_icons/x_icon_b.png'
import instagramIcon from '../footer/social_media_icons/instagram_icon_b.png'
import backgroundPicture from '/assets/img/Segment_footer_bg_01.png'
import footerGraphic from '/assets/img/footer_graphic_01_v1.png'


const Footer_01 = () => {
  const gitHubUrl = '/web/';
  const location = useLocation();
  const showRoutes = [
    gitHubUrl,
    '/web',
    gitHubUrl + "work",
    gitHubUrl + "services",
    gitHubUrl + "process",
    gitHubUrl + "about",
  ];
  return (
    <>
      {showRoutes.includes(location.pathname) ? (
        <div className='global-container relative jos text-center pt-4 mb-8 md:mb-12  z-40'>
          <h2 className=' pb-6'>Let's Start Your Story</h2>
          <Link to={gitHubUrl + 'contact'} className='button-micro  hover:border-violet-400' >
            Start A Free Consultation
          </Link>
        </div>
      ) : <div className='h-[1px] w-[96%] m-auto bg-[#DBD6CF] opacity-25 ' />}

      <footer className=' relative '>
        {/* Footer Top pictures */}
        {showRoutes.includes(location.pathname) ? (
          <div className='relative'>
            <img src={backgroundPicture} className='absolute z-10 bottom-[0%] w-full max-h-[110vh]  mx-auto left-1/2 -translate-x-1/2 ' />
            <img src={footerGraphic} alt='footer-graphic-website-images' className='relative   w-[100%] bottom-[100%] bg-bottom z-20' />
          </div>
        ) : null}

        {/* Footer Top */}
        <div className='global-container pt-8 '>
          <div className='flex flex-wrap mb-4 md:justify-between'>
            <div className='flex flex-col mt-2 gap-y-4 p-3 md:max-w-60'>
              <Link to={gitHubUrl} className='inline-block'>
                <img
                  src={logoStandard}
                  alt='logo'
                  width={150}
                  height={24}
                />
              </Link>
              <li className='list-none leading-[1.8rem]'>
                Our mission is to empower businesses by providing
                innovative online solutions that enhance their digital presence.
              </li>

            </div>

            <div className='flex flex-col gap-y-6 p-3'>
              <h4 className='text-[26px] text-bold capitalize'>
                Menu
              </h4>
              <ul className='flex flex-col  gap-y-3 text-[18px]'>
                {/* <li> <HashLink to={gitHubUrl + 'services#target-pricing'}> Pricing </HashLink> </li> */}
                <li><Link to={gitHubUrl + 'work'} > Work</Link> </li>
                <li><Link to={gitHubUrl + 'services'} >Services </Link></li>
                <li><Link to={gitHubUrl + 'process'}> Process</Link></li>
                <li> <Link to={gitHubUrl + 'careers'} >Careers </Link> </li>
                <li> <Link to={gitHubUrl + 'about'} > About Us </Link>  </li>
              </ul>
            </div>

            <div className='flex flex-col gap-y-6 p-3'>
              <h4 className='text-[26px] text-bold capitalize '>
                Legal
              </h4>
              <ul className='flex flex-col gap-y-3 text-[18px]'>
                {/* <li><Link to={gitHubUrl + 'FAQ'} >&nbsp;</Link></li> */}
                <li><Link to={gitHubUrl + 'FAQ'} > FAQ </Link></li>
                <li> <Link to={gitHubUrl + 'affiliate'} > Affilliate Program </Link> </li>
                <li><Link to={gitHubUrl + 'contact'}> Customer Service</Link> </li>
                <li><Link to={gitHubUrl + 'privacy'}>Privacy Policy</Link></li>
                <li><Link to={gitHubUrl + 'termsofservice'}>Terms Of Service</Link></li>
              </ul>
            </div>

            <div className='flex flex-col gap-y-6 p-3'>

              <h4 className='text-[26px] text-bold capitalize mr-10'>
                Social Links
              </h4>
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
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className='h-[1px] w-[96%] m-auto bg-[#DBD6CF] opacity-25 ' />
        <p className='py-6 text-center text-sm'> © {new Date().getFullYear()} MicroBiz Media. All Rights Reserved. </p>

      </footer >
    </>
  );
};

export default Footer_01;
