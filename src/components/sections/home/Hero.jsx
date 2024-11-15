import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import webDevelopmentIcon from './icon_images/web_development_icon.png'
import brandingAndDesignIcon from './icon_images/branding_and_design_Icon.png'
import SEOIcon from './icon_images/seo_icon.png'
import marketingIcon from './icon_images/marketing_icon.png'
import hostingIcon from './icon_images/hosting_icon.png'
import strategyIcon from './icon_images/icon_strategy.svg'
import SwiperIcon from '../../reusable/swiper-icons.jsx'
import emailUsIcon from './/icon_images/email_us_icon.png'
import TextAndPictureWindow from '../../reusable/text-picture-window.jsx'
import TitleMessage from '../../reusable/title-message.jsx';
const Hero = () => {


  return (
    <>
      {/*...::: Hero Section Start  :::... */}
      <div className='relative 
         mb-[70vh]
       bg-contain bg-top bg-no-repeat z-20 xl:bg-[url("../assets\img\Hero_03.png")] bg-[url("../assets\img\Hero_01-1.png")]
        lg:bg-contain
        '>
          <div className='global-container '>
      <section id='section-hero' className='py-10 lg:py-20'>
        
          
            
            <TitleMessage 
            header='Your Digital Agency'
            paragraph='Take full control of your potential through our expert levels of design,
                    development and marketing for your brand and business.'/>



            <TextAndPictureWindow
              header="Browse Our Catalog"
              paragraph='View some of the amazing work we already made for our existing partners'
              image="assets/img/th-1/funfact-image.jpg"
              button="See More"
            />

            {/* <div className='my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20'></div> */}
            <div className='jos mx-auto  mb-10 max-w-[715px] text-center '>
              <h2>
                What we do?
              </h2>
            </div>
            <div className='jos brand-slider ' data-jos_animation='fade'>
              <Swiper
                spaceEvenly={20}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  // Change slides per view and space between on different screen sizes
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    centeredSlides: false,
                  },
                }}
              >
                <SwiperSlide >
                  <SwiperIcon
                    image={webDevelopmentIcon}
                    text='Web Development'
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <SwiperIcon
                    image={brandingAndDesignIcon}
                    text='Branding & Design'
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <SwiperIcon
                    image={SEOIcon}
                    text='SEO'
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <SwiperIcon
                    image={strategyIcon}
                    text='Strategy'
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <SwiperIcon
                    image={marketingIcon}
                    text='Marketing'
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <SwiperIcon
                    image={hostingIcon}
                    text='Hosting'
                  />
                </SwiperSlide>
              </Swiper>
            </div>

          
        
      </section>
      {/*...::: Hero Section End :::... */}



      {/*...::: Consultation window Section start :::... */}
      <section id='funfact-section'>
        
          <div
            className='jos hero-img overflow-hidden rounded-[40px]  bg-gradient-to-t from-colorBackground to-colorPurple  max-w-[1024px] 
              flex flex-col-reverse mx-auto lg:flex-row mb-32 '
          >
            <div className='flex flex-col justify-center   px-8 py-20 lg:pl-24 lg:max-w-[50%]'>
              <h2>Our consultations are always free</h2>
              <p className='lg:mt-6 lg:mb-10 mt-4 mb-14 text-base '>Give us an email and one of our agents will contact you as soon as we can</p>
              <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>Free Consultation &#x27a4;  </Link>
            </div>

            <div className='  pt-20  lg:pt-0 flex justify-center items-center'>
              <img
                src={emailUsIcon}
                alt='hero-dashboard'
                className='  size-1/3'
              />
            </div>
          </div>


          <TextAndPictureWindow
              header="Our Story"
              paragraph='Read more about us and what inspired us to do what we do for you'
              image="assets/img/th-1/funfact-image.jpg"
              button='Learn More'
            />
           
      
      </section>
      {/*...::: Consultation window Section end :::... */}
      </div>
      </div>


    </>
  );
};

export default Hero;
