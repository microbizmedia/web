
const swiperIcon = ({ text, image, imageSize='w-[80px]' }) => {
    return (
        <>
            <div  className='jos flex justify-center'
            data-jos_animation='flip'
            data-jos_delay='0.1'
            >
                <div className="h-[180px] w-[290px] bg-colorBackground border border-colorWhite border-opacity-20 rounded-lg p-6 flex flex-col items-start justify-center">
                    <img src={image} loading="lazy" alt="web_development_icon" className={`${imageSize} h-auto rounded-lg mb-2 mt-2`} />
                    <p className="text-colorWhite font-bold mt-2  pt-2">{text}</p>
                </div>
            </div>
        </>
    );
};

export default swiperIcon;