import TextAndPictureWindow from '../../components/reusable-elements/text-picture-window'
import TitleMessage from '../../components/reusable-elements/title-message';
const Work = () => {
    return (
        <>
            <section id='section-work'>
                <div className='relative   overflow-hidden z-40'>
                    <div className='global-container'>
                    <TitleMessage 
                     header='100+ B2B Partners'
                     paragraph='At MicroBiz, we have a team of experienced professionals who specialize in creating digital products
                     that transform businesses. Every project we work on gets designed to help our clients become more eficient and competitive.'/>
                     
                        <TextAndPictureWindow header="Hawaii Barbershop Kempten" 
                                        paragraph='A clean and functional website for a local barbershop, allowing clients to
                                         book appointments, view services and hours, browse recent work, read reviews, and connect 
                                         via social media—all in one place.' 
                                    image="/src/assets/img/work-hawaii-1.png"
                                    button='Open Live Demo'
                                    link='https://microbizmedia.github.io/hawaii-barbershop/' />
                                     <TextAndPictureWindow header="Devado Vehicle Solutions" 
                                        paragraph=' The ultimate car enthusiast platform developed
                                       for both individuals and businesses boasting market
                                    leading features and a user-friendly interface' 
                                    image="/src/assets/img/work-nefi-1.png"
                                    button='Open Live Demo' 
                                    />
                                     <TextAndPictureWindow header="Devado Vehicle Solutions" 
                                        paragraph=' The ultimate car enthusiast platform developed
                                       for both individuals and businesses boasting market
                                    leading features and a user-friendly interface' 
                                    image="/src/assets/img/work-placeholder-1.png"
                                    button='Open Live Demo' />
                                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
