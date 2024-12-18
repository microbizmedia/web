import { Link } from 'react-router-dom';
// import emailUsIcon from '../../../assets/icon_images/email_us_icon.png'
import emailUsIcon from '../../assets/icon_images/email_us_icon.png'
import TextAndPictureWindow from '../../components/reusable-elements/text-picture-window.jsx'
import TitleMessage from '../../components/reusable-elements/title-message.jsx';
import ServicesIcons from '../../components/reusable-elements/services-icons.jsx';
import TextVideoWindow from '../../components/reusable-elements/text-video-window.jsx';
const Hero = () => {


  return (
    <>
      {/*...::: Hero Section Start  :::... */}
      <div className='relative bg-[url("../assets\img\Hero_03.png")] bg-contain bg-top bg-no-repeat z-20  
        lg:bg-contain
        '>
        <div className='global-container '>
          <section id='section-hero' >



            <TitleMessage
              header='Your Digital Agency'
              paragraph='Take full control of your potential through our expert levels of design,
                    development and marketing for your brand and business.'/>



            <TextVideoWindow
              header="Browse Our Catalog"
              paragraph='View some of the amazing work we already made for our existing partners'
              // image="assets/img/th-1/funfact-image.jpg"
              button="See More"
            />

            <ServicesIcons
              title="What We Offer" />


          </section>
          {/*...::: Hero Section End :::... */}

          {/*...::: Consultation window Section start :::... */}
          <section id='consultation-window-section'>

            <div
              className='jos hero-img overflow-hidden rounded-[40px]  bg-gradient-to-t from-colorBackground to-colorPurple  max-w-[1024px] 
              flex flex-col-reverse mx-auto lg:flex-row mb-6 lg:mb-16 '
            >
              <div className='flex flex-col justify-center   px-8 py-10 lg:pl-24 lg:max-w-[50%]'>
                <h2>Our consultations are always free</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-8 text-base '>Give us an email and one of our agents will contact you as soon as we can</p>
                <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>Free Consultation &#x27a4;  </Link>
              </div>

              <div className='  pt-20  lg:pt-0 flex justify-center items-center'>
                <img
                  src={emailUsIcon}
                  alt='hero-dashboard'
                  className='animate-float  size-1/3'
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
