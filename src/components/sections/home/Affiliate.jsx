import { Link } from 'react-router-dom';

const Affiliate = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: 404 Section Start :::... */}
        <section id='404-section'>
          {/* Section Spacer */}
          <div className='py-40 pt-36 xl:pb-[200px] xl:pt-[180px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* 404 Content */}
              <div className='mx-auto max-w-[954px] text-center'>
                {/* <h1 className="bg-[url('/assets/img/th-1/404-text-image.jpg')] bg-contain bg-clip-text bg-center bg-no-repeat text-[150px] text-transparent sm:text-[220px] lg:text-[300px] xl:text-[350px]">
                  404
                </h1> */}

                <h1 className='font-bold'>
                  Oops!, Page not found
                </h1>
                <p className='sub-title jos tracking-wider slide-from-bottom text-center  m-auto py-6'>
                    Sorry for the inconvenience lets go home
                </p>
                {/* <Link
                 
                  className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  Go to homepage
                </Link> */}
                <Link 
                 to='/micro-biz-media'
                className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'> Take me home &#x27a4;  </Link>
              </div>
              {/* 404 Content */}
              
            </div>
            {/* Section Container */}
          </div>
          <div className='h-[1px] w-full bg-[#DBD6CF] opacity-25 max-w-[1024px] m-auto' />
          {/* Section Spacer */}
        </section>
        {/*...::: 404 Section End :::... */}
        
      </main>
    </>
  );
};

export default Affiliate;
