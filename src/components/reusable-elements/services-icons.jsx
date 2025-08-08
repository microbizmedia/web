import { useState } from 'react'
import SwiperIcon from './services-icon'
import webDevelopmentIcon from '../../assets/icon_images/web_development_icon.png'
import brandingAndDesignIcon from '../../assets/icon_images/branding_and_design_Icon.png'
import SEOIcon from '../../assets/icon_images/seo_icon.png'
import marketingIcon from '../../assets/icon_images/marketing_icon.png'
import hostingIcon from '../../assets/icon_images/hosting_icon.png'
import strategyIcon from '../../assets/icon_images/icon_strategy.svg'
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
          image={webDevelopmentIcon}
          text='Web Development'
        />
        <SwiperIcon
          image={brandingAndDesignIcon}
          text='Branding & Design'
        />
         <SwiperIcon
          image={hostingIcon}
          text='Hosting'
        />
        <SwiperIcon
          image={strategyIcon}
          text='Strategy'
        />
        <SwiperIcon
          image={marketingIcon}
          text='Marketing'
        />
     
          <SwiperIcon
          image={SEOIcon}
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