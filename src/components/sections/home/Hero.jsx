import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import webDevelopmentIcon from './icon_images/web_development_icon.png'
import brandingAndDesignIcon from './icon_images/branding_and_design_Icon.png'
import SEOIcon from './icon_images/seo_icon.png'
import strategyIcon from './icon_images/strategy_icon.png'
import marketingIcon from './icon_images/marketing_icon.png'
import hostingIcon from './icon_images/hosting_icon.png'
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
            <div
              className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 
              flex flex-col-reverse
              mx-auto max-w-[1024px]
             
              lg:flex-row lg:max-w-full'
              data-jos_animation='zoom'
            >
              <div className='flex flex-col justify-center flex-1 bg-colorBackground px-4 py-10
              
              
              lg:pl-16'>
                <h2>Browse Our Catalog</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-14 text-base lg:max-w-[70%]'>View some of the amazing work we already made for our existing partners</p>
                <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>See More &#x27a4;  </Link>
              </div>
               <img
                src='assets/img/th-1/funfact-image.jpg'
                alt='hero-dashboard'
                className='flex-1 pt-4 lg:pr-20 bg-colorBackground  object-cover object-center  max-h-[340px] lg:pt-0 w-full'
              />
              <div className='relative overflow-hidden '>
              </div>
            </div>

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
                    centeredSlides:false,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides:false,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    centeredSlides:false,
                  },
                }}
              >
              
                  <SwiperSlide className='flex justify-center'>
                  <div className="h-[180px] w-[270px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start">
                    <img src={webDevelopmentIcon} alt="web_development_icon" className="w-20 h-auto rounded-lg mb-2 mt-2" />
                    <p className="text-colorWhite mt-2  pt-2">Web Development</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                  <div className="h-[180px] w-[270px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start">
                    <img src={brandingAndDesignIcon} alt="web_development_icon" className="w-20 h-auto rounded-lg mb-2 mt-2" />
                    <p className="text-colorWhite  mt-2  pt-2">Branding & Design</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                  <div className="h-[180px] w-[270px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start">
                    <img src={SEOIcon} alt="web_development_icon" className="w-20 h-auto rounded-lg mb-2 mt-2" />
                    <p className="text-colorWhite  mt-2  pt-2">SEO</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                  <div className="h-[180px] w-[270px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start">
                    <img src={strategyIcon} alt="web_development_icon" className="w-14 h-auto rounded-lg mb-2 mt-2" />
                    <p className="text-colorWhite  mt-2  pt-2">Strategy</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                  <div className="h-[180px] w-[270px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start">
                    <img src={marketingIcon} alt="web_development_icon" className="w-20 h-auto rounded-lg mb-2 mt-2" />
                    <p className="text-colorWhite  mt-2  pt-2">Marketing</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                  <div className="h-[180px] w-[270px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start">
                    <img src={hostingIcon} alt="web_development_icon" className="w-20 h-auto rounded-lg mb-2 mt-2" />
                    <p className="text-colorWhite  mt-2  pt-2">Hosting</p>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
            
          </div>
          {/* <div className='orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]'></div> */}

          {/* <div className='orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]'></div> */}
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
