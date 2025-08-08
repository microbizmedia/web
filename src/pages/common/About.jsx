
import TitleMessage from "../../components/reusable-elements/title-message";
import AboutUsIcons from '../../components/reusable-elements/about-icons';
import worldMap from '../../assets/img/Segment_2_graphic_01.png'

const About = () => {
    return (
        <>
            <section id='section-about'>
                <div className='relative   overflow-hidden z-40'>
                    <div className='global-container'>
                        <TitleMessage
                            header='About Us'
                            paragraph='For years, we’ve partnered with startups, nonprofits, corporations,
                      and industry leaders to design, launch, and scale products that drive business growth.'/>
                        <AboutUsIcons
                            title="MicroBiz Media In a Nutshell" />




                        <h2 className='jos mx-auto  max-w-[715px] text-center pb-4 lg:pb-8' >We work worldwide</h2>
                        <div className='jos hero-img overflow-hidden rounded-2xl  border-[12px]
                         border-white border-opacity-15  flex flex-col-reverse mx-auto max-w-[1024px]  lg:flex-row  mb-8 md:mb-12'
                            data-jos_animation='zoom'
                        >
                            <div className='flex flex-col justify-center flex-1 bg-colorBackground px-3 py-10 lg:pl-16'>
                                <h2>Result Driven Work!</h2>
                                <p className='my-6 lg:max-w-[90%] text-colorPurple font-bold'>Visit our Career center</p>
                                <p className=' lg:max-w-[90%] font-bold'>We are an equal opportunity employer, Talent is everywhere so work where you are, we care about the resulets!</p>

                            </div>
                            <img
                                src={worldMap}
                                alt='world-map'
                                className='flex-1 pt-4 lg:pr-10 bg-colorBackground  object-contain object-center  max-h-[280px] lg:py-4 w-full'
                            />
                        </div>




                    </div>
                </div>










            </section>
        </>
    );
};

export default About;
