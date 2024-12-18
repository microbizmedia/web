import { Link } from 'react-router-dom';
import video from '../../assets/videos/Segment_01_Scene_01_final_02.mp4'
const textVideoWindow = ({ header, paragraph, image, button }) => {
    return (
        <>
            <div
                className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15
              flex flex-col-reverse
              mx-auto max-w-[1024px]
              lg:flex-row mb-8 lg:mb-12'
                data-jos_animation='zoom'
            >
                <div className='flex flex-col justify-center flex-1 bg-colorBackground px-4 py-6 lg:pl-16'>
                    <h2>{header}</h2>
                    <p className='lg:mt-6 lg:mb-10 mt-4 mb-4 lg:max-w-[70%]'>{paragraph}</p>
                    <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'> {button} &#x27a4;  </Link>
                </div>
                
                   
                   
                    
              
                <video autoPlay muted loop 
                className='flex-1 pt-4 lg:pr-20 bg-colorBackground  object-cover object-center  max-h-[340px] lg:pt-0 w-full'
                >
                    <source src={video} type="video/mp4">
                        </source>
                            Your browser does not support the video tag.
                        </video>

                        
                    </div>
                </>
                );
};

                export default textVideoWindow;
