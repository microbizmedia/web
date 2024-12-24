
import { Link, useLocation } from 'react-router-dom';
const TitleMessage = ({ header, paragraph}) => {
    const location = useLocation();
    const hiddenRoutes = ["/careers", "/about", "/affiliate", "/customer-service", "/FAQ"];
    return (
        <>
                <h1 className='jos slide-from-bottom text-center pt-28 lg:pt-34
                 '>
                    {header}
                </h1>
                <p className='sub-title jos tracking-wider slide-from-bottom text-center  m-auto py-8'>
                    {paragraph}
                </p>




                {hiddenRoutes.includes(location.pathname) ? null : (
                <div
                    className='jos flex flex-wrap justify-center gap-2 mb-8 lg:mb-10'
                    data-jos_animation='fade'
                >
                    <Link
                        to='/contact'
                        className=' button-micro rounded-[10px]  border-#c7c5e2 bg-colorPurple py-4 after:bg-violet-400 hover:border-violet-400'
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
                )}






        </>
    );
};

export default TitleMessage;