import TitleMessage from '../../components/reusable-elements/title-message';
const Affiliate = () => {
  return (
    <>
      <main className='main-wrapper global-container relative overflow-hidden'>
        {/*...::: 404 Section Start :::... */}
        <section id='affiliate-section'>
          <TitleMessage 
          header='Affiliate Program'
          paragraph='We are currently working on this. Stay Tuned!'
          />
          
          <div
                className=' jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 mb-8 lg:mb-12 mx-auto p-0'
                data-jos_animation='zoom'
            >
                <div className='bg-colorBackground px-4 py-10 lg:py-14 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                    <h2>We are currently working on lunghing our affiliate program tell us about you so we can contact you!</h2>
                    <a href="mailto:info@microbizmedia.com" target="_blank"><p className='pt-6 text-colorPurple'>info@microbizmedia.com</p> </a>
                </div>
            </div> 

          <div className='h-[1px] w-full bg-[#DBD6CF] opacity-25 max-w-[1024px] m-auto' />
          {/* Section Spacer */}
        </section>
        {/*...::: 404 Section End :::... */}
        
      </main>
    </>
  );
};

export default Affiliate;
