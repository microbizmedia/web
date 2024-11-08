import { Link } from 'react-router-dom';
import emailUsIcon from './/icon_images/email_us_icon.png'
const FunFact = () => {
  // To open the lightbox change the value of the "toggler" prop.
  return (
    <>
      {/*...::: FunFact Section Start :::... */}
      <section id='funfact-section' className=' bg-colorBackground'>
        <div className='mx-auto  px-5 bg-[url("../assets\img\Segment_5_bg_01.png")] bg-cover bg-top bg-contain bg-no-repeat'>
        <div
              className='jos hero-img overflow-hidden rounded-[40px]  bg-gradient-to-t from-colorBackground to-colorPurple  max-w-[1024px]
              flex flex-col-reverse mx-auto max-w-[1024px] lg:flex-row mb-20 '
            >

            {/* FunFact Left Block */}
            <div className='flex flex-col justify-center   px-8 py-20 lg:pl-24 lg:max-w-[50%]'>
                <h2>Our consultations are always free</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-14 text-base '>Give us an email and one of our agents will contact you as soon as we can</p>
                <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>Free Consultation &#x27a4;  </Link>
              </div>
            
            {/* Funfacct Left Block */}

            {/* Funfact Right Block */}
            <div className='  pt-20  lg:pt-0 flex justify-center items-center'>
            <img 
                src={emailUsIcon}
                alt='hero-dashboard'
                className='  size-1/3'
              />
            </div>
           
            {/* Funfact Right Block */}
            </div>
            <div
              className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 
              flex flex-col-reverse mx-auto max-w-[1024px] lg:flex-row '
            >

            {/* FunFact Left Block */}
            <div className='flex flex-col justify-center flex-1 bg-colorBackground px-4 py-10 lg:pl-16'>
                <h2>Our Story</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-14 text-base lg:max-w-[70%]'>Read more about us and what inspired us to do what we do for you</p>
                <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>Learn More &#x27a4;  </Link>
              </div>
            
            {/* Funfacct Left Block */}

            {/* Funfact Right Block */}
            <img
                src='assets/img/th-1/funfact-image.jpg'
                alt='hero-dashboard'
                className='flex-1 pt-4 lg:pr-20 bg-colorBackground  object-cover object-center  max-h-[340px] lg:pt-0 w-full'
              />
            {/* Funfact Right Block */}
            </div>
            <div className='jos text-center py-40'>
            <h2 className=' pb-10'>Let's Start Your Story</h2>
            <Link
                  to='/contact'
                  className='button-micro rounded-[10px] border-1 border-#c7c5e2 bg-colorPurple py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                 
                >
                  Start A Free Consultation
                </Link>
                </div>
        </div>
      </section>
      {/*...::: Funfact Section End :::... */}
    </>
  );
};

export default FunFact;
