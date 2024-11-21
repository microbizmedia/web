import { Link } from 'react-router-dom';
const careerWindow = ({ header, career, description }) => {
    return (
        <>
            <div
                className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 
             
              mx-auto 
              mb-14 '
                data-jos_animation='zoom'
            >
                <div className='bg-colorBackground w-full  px-6 sm:px-16 py-10 sm:pt-16 sm:pb-10  '>
                    <h2>{header}</h2>
                    <p className='text-colorPurple py-4'>{career}</p>
                    <div className='flex flex-wrap justify-between'>

                        <p className='whitespace-pre-line pb-6 sm:pb-0'>{description}</p>
                        <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'> Easy Apply &#x27a4;  </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default careerWindow;