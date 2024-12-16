import TitleMessage from '../reusable-elements/title-message';
import ProcessWindow from '../reusable-elements/process-window';
import { Link } from 'react-router-dom';
import TextAndPictureWindow from '../reusable-elements/text-picture-window';
const CustomerService = () => {
  return (
    <>
      <main className='main-wrapper global-container relative overflow-hidden'>
        {/*...::: 404 Section Start :::... */}
        <section id='affiliate-section'>
          <TitleMessage
            header="We're All Ears!"
            paragraph="Send us an email of fill up the form, we'll get right back to you."
          />



          <div
            className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15
              flex flex-col-reverse
              mx-auto max-w-[1024px]
              lg:flex-row mb-8 lg:mb-12'
            data-jos_animation='zoom'
          >
            <div className='flex flex-col justify-center flex-1 bg-colorBackground px-4 py-6 lg:pl-16'>
              <h2>Send us an email</h2>
              <p className='lg:mb-8 mt-4 mb-4 lg:max-w-[70%]'>Tell us what we can do for you.</p>
              <a href="mailto:info@microbizmedia.com" target="_blank"><p className=' text-colorPurple'>info@microbizmedia.com</p> </a>
            </div>
            <img
              src="assets/img/th-1/funfact-image.jpg"
              alt='hero-dashboard'
              className='flex-1 pt-4 lg:pr-20 bg-colorBackground  object-cover object-center  max-h-[240px] lg:pt-0 w-full'
            />
          </div>



          <div
            className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15
              
            
               mb-8 lg:mb-12 '
            data-jos_animation='zoom'
          >
            {/* <div className='flex flex-col justify-center items-center bg-colorBackground px-4 py-6 lg:pl-16 '> */}
            
           
                <form className="w-full  rounded-lg px-4 lg:px-16 py-8">
                  <h2 className="mb-8">Let's Start Your Story</h2>

                  {/* Four placeholders */}
                  <div className="flex flex-wrap gap-5">
                  <input
                      type="text"
                      placeholder="What is your name?*"
                      className="bg-colorPurple border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full lg:max-w-[410px]"
                    />
                    <input
                      type="text"
                      placeholder="What is your phone number?"
                      className="bg-colorPurple border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full lg:max-w-[410px]"
                    />
                    <input
                      type="text"
                      placeholder="What is your email address?*"
                      className="bg-colorPurple border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full lg:max-w-[410px]"
                    />
                    <input
                      type="text"
                      placeholder="What is your budget?"
                      className="bg-colorPurple border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full lg:max-w-[410px]"
                    />
                  </div>

                  {/* Text area */}
                  <div className="mt-4">
                    <textarea
                      placeholder="What can MicroBiz do for you?*"
                      className="bg-colorPurple w-full border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      rows="4"
                    ></textarea>
                  </div>
                  <p className='text-colorPurple sub-title tracking-wider slide-from-bottom text-center  m-auto text-sm'>
                    Fields that contain a *star*(*) are considered mandatory fields.
                </p>
                  {/* Button */}
                  <button
                    type="submit"
                    className=" mt-4 w-full bg-colorWhite text-colorBackground font-bold py-2 px-4 rounded-lg hover:bg-purple-100"
                  >
                    Contact
                  </button>
                  <p className='sub-title tracking-wider slide-from-bottom text-center  mx-auto mt-2 text-sm'>
                    By continuing you agree to the terms and conditions of MicroBiz Media LLC.
                </p>
                </form>
         
            </div>
{/* </div> */}



            <div className='h-[1px] w-full bg-[#DBD6CF] opacity-25 max-w-[1024px] m-auto' />
            {/* Section Spacer */}
        </section>
        {/*...::: 404 Section End :::... */}

      </main>
    </>
  );
};

export default CustomerService;
