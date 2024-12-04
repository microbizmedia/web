
import TitleMessage from '../../components/reusable/title-message';
import AboutUsIcons from '../../components/reusable/about-icons';
const About = () => {
    return (
        <>
            <section id='section-about'>
                <div className='relative   overflow-hidden   mb-[50vh] z-40'>
                    <div className='global-container'>
                    <TitleMessage 
                     header='About Us'
                     paragraph='For years, we’ve partnered with startups, nonprofits, corporations,
                      and industry leaders to design, launch, and scale products that drive business growth.'/>
                        <AboutUsIcons 
            title="MicroBiz Media In a Nutshell" />
                        

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
