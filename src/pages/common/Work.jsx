import { Link } from 'react-router-dom';
const Work = () => {
    return (
        <>
            <section id='section-work'>
                <div className='relative z-[1]  overflow-hidden bg-colorBackground pt-10 pb-20 xl:pt-16 xxl:pb-40'>
                    <div className='global-container'>
                        <div className='mb-8 flex flex-col items-center text-center lg:mb-10'>
                            <h1 className='jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]'>
                                100+B2B Partners
                            </h1>
                            <p className='jos tracking-wider slide-from-bottom mb-11 max-w-[700px] text-lg font-extralight sm:text-xl xl:max-w-[900px]'>
                                At MicroBiz, we have a team of experienced professionals who specialize in creating digital products that transform businesses.
                                We understand the importance of delivering results quickly.
                                Every project we work on gets designed to help our clients become more efficient and competitive
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
