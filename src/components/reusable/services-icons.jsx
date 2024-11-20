import SwiperIcon from '../../reusable/swiper-icons.jsx'
const servicesIcons = () => {
    return (
        <>
            <div>
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