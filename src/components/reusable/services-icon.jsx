
const swiperIcon = ({ text, image }) => {
    return (
        <>
            <div  className='flex justify-center'>
                <div className="h-[180px] w-[270px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start justify-center">
                    <img src={image} alt="web_development_icon" className="w-20 h-auto rounded-lg mb-2 mt-2" />
                    <p className="text-colorWhite mt-2  pt-2">{text}</p>
                </div>
            </div>
        </>
    );
};

export default swiperIcon;