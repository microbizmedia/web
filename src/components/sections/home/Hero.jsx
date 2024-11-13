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
const Hero = () => {


  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id='section-hero'>
        <div className='relative z-[1]  overflow-hidden bg-[url("../assets\img\Hero_01.jpg")] bg-cover bg-top bg-contain bg-no-repeat pt-10 pb-20 xl:pt-28 xxl:pb-40 xxl:pt-[75px]'>
          <div className='global-container'>
            <div className='mb-8 flex flex-col items-center text-center lg:mb-10'>
              <h1 className='jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]'>
                Your Digital Agency
              </h1>
              <p className='jos tracking-wider slide-from-bottom mb-11 max-w-[700px] text-lg font-extralight sm:text-xl xl:max-w-[620px]'>
                Take full control of your potential through our expert levels of design,
                development and marketing for your brand and business.
              </p>
              <div
                className='jos flex flex-wrap justify-center gap-6'
                data-jos_animation='fade'
              >
                <Link
                  to='/contact'
                  className='button-micro rounded-[10px] border-1 border-#c7c5e2 bg-colorPurple py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  Start A Free Consultation
                </Link>
                <Link
                  to='/about'
                  className='button border-0 bg-transparent py-4'
                >
                  Or read more about us &#x27a4;
                </Link>
              </div>
            </div>
            <TextAndPictureWindow
              header="Browse Our Catalog"
              paragraph='View some of the amazing work we already made for our existing partners'
              image="assets/img/th-1/funfact-image.jpg"
              button="See More"
            />

            {/* <div className='my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20'></div> */}
            <div className='jos mx-auto mt-20 mb-10 max-w-[715px] text-center lg:mb-16'>
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

          </div>
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
      <section id='funfact-section' className=' bg-colorBackground'>
        <div className='mx-auto  px-5 '>
          <div
            className='jos hero-img overflow-hidden rounded-[40px]  bg-gradient-to-t from-colorBackground to-colorPurple  max-w-[1024px]
              flex flex-col-reverse mx-auto lg:flex-row mb-20 '
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
        </div>
      </section>
    </>
  );
};

export default Hero;
