import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/img/404_graphic_01.png'

const Error_404 = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: 404 Section Start :::... */}
        <section id='404-section' className='global-container'>
          {/* Section Container */}
          {/* 404 Content */}
          <div className='flex flex-col items-center justify-center  text-center mt-28 mb-20'>
            <img
              src={ErrorImg}
              alt='404-error-image'
              width={400}
            />
            <h1 className='pt-8'>
              Oops! Page not found
            </h1>
            <p className='sub-title jos tracking-wider slide-from-bottom m-auto py-6'>
              Sorry for the inconvenience, let's go home.
            </p>
            <Link
              to='/micro-biz-media/'
              className='button bg-colorWhite text-colorBackground rounded-md'> Take me home &#x27a4;  </Link>
            {/* 404 Content */}
          </div>
          {/* Section Container */}
          <div className='h-[1px] bg-[#DBD6CF] opacity-25 max-w-[1024px] m-auto' />
        </section>
        {/*...::: 404 Section End :::... */}
      </main>
    </>
  );
};

export default Error_404;
