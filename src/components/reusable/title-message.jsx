
import { Link } from 'react-router-dom';
const TitleMessage = ({ header, paragraph, image, button }) => {
    return (
        <>
                <h1 className='jos slide-from-bottom text-center pt-28 lg:pt-34
                 '>
                    {header}
                </h1>
                <p className='sub-title jos tracking-wider slide-from-bottom text-center max-w-[700px] m-auto py-8'>
                    {paragraph}
                </p>
                <div
                    className='jos flex flex-wrap justify-center gap-2 pb-8 lg:pb-10'
                    data-jos_animation='fade'
                >
                    <Link
                        to='/contact'
                        className=' button-micro rounded-[10px]  border-#c7c5e2 bg-colorPurple py-4 after:bg-colorOrangyRed hover:border-colorOrangyRed'
                    >
                        Start A Free Consultation
                    </Link>
                    <Link
                        to='/about'
                        className=' button border-0 bg-transparent py-4'
                    >
                        Or read more about us &#x27a4;
                    </Link>
                </div>
        </>
    );
};

export default TitleMessage;