
import { Link, useLocation } from 'react-router-dom';
const TitleMessage = ({ header, paragraph, className }) => {
    const location = useLocation();
    const hiddenRoutes = [
        "/micro-biz-media/careers",
        "/micro-biz-media/about",
        "/micro-biz-media/affiliate",
        "/micro-biz-media/contact",
        "/micro-biz-media/FAQ",
        "/micro-biz-media/privacy"
    ];
    return (
        <>
            <h1 className='jos slide-from-bottom text-center pt-14 lg:pt-26
                 '>
                {header}
            </h1>
            <p className={`sub-title jos tracking-wider slide-from-bottom text-center  m-auto py-6 lg:py-8  ${className}`}>
                {paragraph}
            </p>




            {hiddenRoutes.includes(location.pathname) ? null : (
                <div
                    className='jos flex flex-wrap justify-center gap-2 mb-6 lg:mb-10'
                    data-jos_animation='fade'
                >
                    <Link
                        to='/micro-biz-media/contact'
                        className=' button-micro rounded-[10px]  border-#c7c5e2 bg-colorPurple py-4 after:bg-violet-400 hover:border-violet-400'
                    >
                        Start A Free Consultation
                    </Link>
                    <Link
                        to='/micro-biz-media/about'
                        className=' button border-0 bg-transparent py-4'
                    >
                        Or read more about us &#x27a4;
                    </Link>
                </div>
            )}






        </>
    );
};

export default TitleMessage;