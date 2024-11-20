import SwiperIcon from './services-icon'
import webDevelopmentIcon from '../../assets/icon_images/web_development_icon.png'
import brandingAndDesignIcon from '../../assets/icon_images/branding_and_design_Icon.png'
import SEOIcon from '../../assets/icon_images/seo_icon.png'
import marketingIcon from '../../assets/icon_images/marketing_icon.png'
import hostingIcon from '../../assets/icon_images/hosting_icon.png'
import strategyIcon from '../../assets/icon_images/icon_strategy.svg'
const servicesIcons = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-8 '>
                  <SwiperIcon
                    image={webDevelopmentIcon}
                    text='Web Development'
                  />
                  <SwiperIcon
                    image={brandingAndDesignIcon}
                    text='Branding & Design'
                  />
                  <SwiperIcon
                    image={SEOIcon}
                    text='SEO'
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
                    image={hostingIcon}
                    text='Hosting'
                  />
            </div>
        </>
    );
};

export default servicesIcons;