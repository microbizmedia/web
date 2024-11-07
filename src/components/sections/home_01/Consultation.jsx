import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FunFact = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/*...::: FunFact Section Start :::... */}
      <section id='funfact-section'>
        <div className='mx-auto max-w-[1024px] px-5 bg-colorBackground'>
        <div
              className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 
              flex flex-col-reverse
              mx-auto max-w-[1024px]
             
              lg:flex-row lg:max-w-full'
              
            >

              
               
              <FsLightbox
              toggler={toggler}
              sources={['https://www.youtube.com/watch?v=3nQNiWdeH2Q']}
            />
            
            {/* FunFact Left Block */}
            <div className='flex flex-col justify-center flex-1 bg-colorBackground px-4 py-10
              
              
              lg:pl-16'>
                <h2>Browse Our Catalog</h2>
                <p className='lg:mt-10 lg:mb-20 mt-4 mb-14 text-base'>View some of the amazing work we already made for our existing partners</p>
                <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>See More &#x27a4;  </Link>
              </div>
            
            {/* Funfacct Left Block */}

            {/* Funfact Right Block */}
            <img
                src='assets/img/th-1/funfact-image.jpg'
                alt='hero-dashboard'
                className='flex-1 pt-4 lg:pr-20 bg-colorBackground  object-cover object-center  max-h-[340px] lg:pt-0 w-full'
              />
           
             
              
           
            {/* Funfact Right Block */}
            </div>
        </div>
      </section>
      {/*...::: Funfact Section End :::... */}
    </>
  );
};

export default FunFact;
