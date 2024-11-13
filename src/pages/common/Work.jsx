import { Link } from 'react-router-dom';
import TextAndPictureWindow from '../../components/reusable/text-picture-window'
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
                        <TextAndPictureWindow header="Devado Vehicle Solutions" 
                                        paragraph=' The ultimate car enthusiast platform developed
                                       for both individuals and businesses boasting market
                                    leading features and a user-friendly interface' 
                                    image="assets/img/th-1/funfact-image.jpg"
                                    button='Open Study' />

                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
