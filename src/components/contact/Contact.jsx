import TitleMessage from '../reusable-elements/title-message';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import emailUsIcon from '../../assets/icon_images/email_us_icon.png'

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    message: '',
  });


  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_z66d3pe', // Replace with your EmailJS Service ID
        'template_75m1cfj', // Replace with your EmailJS Template ID
        formData,
        'L4KiG_MtOqw6fwPNB' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitted(true);
          setFormData({
            name: '',
            phone: '',
            email: '',
            budget: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send the message. Try again later.');
        }
      );
  };


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
            <a className='relative lg:right-[40px] flex-1 flex justify-center items-center pt-16 lg:pr-20   h-[240px] lg:pt-0 w-full ' href="mailto:info@microbizmedia.com" target="_blank"><img
              src={emailUsIcon}
              alt='letter-image'
              className=' size-6/12 animate-float  object-center'
            /></a>
          </div>



          <div
            className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15
              
            
               mb-8 lg:mb-12 '
            data-jos_animation='zoom'
          >
            {/* <div className='flex flex-col justify-center items-center bg-colorBackground px-4 py-6 lg:pl-16 '> */}


            <form className="w-full  rounded-lg px-4 lg:px-16 py-8"
              onSubmit={handleSubmit}>
              <h2 className="mb-8">Let's Start Your Story</h2>


              {isSubmitted && (
                <p className="text-green-500 mb-4">Message sent successfully!</p>
              )}



              {/* Four placeholders */}
              <div className="flex flex-wrap gap-4 lg:grid grid-rows-2 grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  type="text" spellCheck="false"
                  placeholder="What is your name?*"
                  className="bg-colorPurple/70 placeholder:text-colorWhite/60  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "

                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  spellCheck="false"
                  placeholder="What is your phone number?"
                  className="bg-colorPurple/70 placeholder:text-colorWhite/60  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}

                  required
                  spellCheck="false"
                  placeholder="What is your email address?*"
                  className="bg-colorPurple/70 placeholder:text-colorWhite/60  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                />
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  spellCheck="false"
                  placeholder="What is your budget?"
                  className="bg-colorPurple/70 placeholder:text-colorWhite/60  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                />
              </div>

              {/* Text area */}
              <div className="mt-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What can MicroBiz do for you?*"
                  className="bg-colorPurple/70 placeholder:text-colorWhite/60  text-white w-full border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  rows="4"
                ></textarea>
              </div>
              <p className='text-colorPurple sub-title tracking-wider slide-from-bottom text-center  m-auto text-sm'>
                Fields that contain a *star*(*) are considered mandatory fields.
              </p>
              {/* Button */}
              <button
                type="submit"
                className=" mt-4 w-full bg-colorWhite text-colorBackground font-bold py-2 px-4 rounded-lg"
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
