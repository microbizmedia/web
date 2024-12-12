import TextAndPictureWindow from '../../components/reusable/text-picture-window'
import TitleMessage from '../../components/reusable/title-message';
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
                     
                        <TextAndPictureWindow header="Devado Vehicle Solutions" 
                                        paragraph=' The ultimate car enthusiast platform developed
                                       for both individuals and businesses boasting market
                                    leading features and a user-friendly interface' 
                                    image="assets/img/th-1/funfact-image.jpg"
                                    button='Open Study' />
                                     <TextAndPictureWindow header="Devado Vehicle Solutions" 
                                        paragraph=' The ultimate car enthusiast platform developed
                                       for both individuals and businesses boasting market
                                    leading features and a user-friendly interface' 
                                    image="assets/img/th-1/funfact-image.jpg"
                                    button='Open Study' />
                                     <TextAndPictureWindow header="Devado Vehicle Solutions" 
                                        paragraph=' The ultimate car enthusiast platform developed
                                       for both individuals and businesses boasting market
                                    leading features and a user-friendly interface' 
                                    image="assets/img/th-1/funfact-image.jpg"
                                    button='Open Study' />
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
