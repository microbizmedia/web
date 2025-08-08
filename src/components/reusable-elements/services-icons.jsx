import { useState } from 'react'
import SwiperIcon from './services-icon'
const servicesIcons = ({ title }) => {


  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="mb-6 lg:mb-16">
      <h2 className='jos mx-auto   pb-4 lg:pb-8   max-w-[715px] text-center ' >{title}</h2>
      <div className={`flex flex-wrap justify-center gap-8
      
      overflow-hidden transition-all duration-300 
        ${isExpanded ? "max-h-full" : "max-h-[610px]"}
      
      
      
      `}>
        <SwiperIcon
          image="/assets/icon_images/web_development_icon.png"
          text='Web Development'
        />
        <SwiperIcon
          image='/assets/icon_images/branding_and_design_Icon.png'
          text='Branding & Design'
        />
         <SwiperIcon
          image='/assets/icon_images/hosting_icon.png'
          text='Hosting'
        />
        <SwiperIcon
          image='/assets/icon_images/icon_strategy.svg'
          text='Strategy'
        />
        <SwiperIcon
          image='/assets/icon_images/marketing_icon.png'
          text='Marketing'
        />
     
          <SwiperIcon
          image='/assets/icon_images/seo_icon.png'
          text='SEO'
        />
        
      
      
      </div>
      {/* Toggle Button */}
      <div className='flex justify-center'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`button sm:hidden bg-colorWhite text-colorBackground rounded-md px-[90px] mt-2
        
         ${isExpanded ? "hidden" : "block"}
        `}
      >
        View All &#x27a4;
      </button>
      </div>
    </div>
  );
};

export default servicesIcons;