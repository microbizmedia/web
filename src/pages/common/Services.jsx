import TitleMessage from '../../components/reusable/title-message';
import ServicesIcons from '../../components/reusable/services-icons';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <>
      <section id='section-services'>
        <div className='relative   overflow-hidden   mb-[50vh] z-40'>
          <div className='global-container'>
            <TitleMessage
              header='Full Service Digital Partnership'
              paragraph='By working with us you get an entire team of experienced designers, developers, copy writers, data analists and 
                     system administrators, our goal is to produce real results and propel you towards endless growth'/>
            <h2 className='jos mx-auto  mb-6 lg:my-10 max-w-[715px] text-center' >Services</h2>
            <ServicesIcons />
            <h2 className='jos mx-auto  mb-6 lg:my-10 max-w-[715px] text-center' >Packages</h2>
            <div>
              <div
                className='jos  overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15   inline-block

              '
                data-jos_animation='zoom'
              >
                <div className='bg-colorBackground'>
                  <h2 className='pt-10 text-center'>Business Basic</h2>
                  <ul className='p-10 space-y-2'>
                    <li className=''><span className='text-green-500'>&#10004;</span> Web Design and Development</li>
                    <li className=''><span className='text-green-500'>&#10004;</span> Domain Registration and Hosting</li>
                    <li className='text-slate-500'>&#x2717; Brand Strategy and Logo</li>
                    <li className='text-slate-500'>&#x2717; Holistic Updates</li>
                    <li className='text-slate-500'>&#x2717; Annual UX Improvements</li>
                    <li className='text-slate-500'>&#x2717; Ongoing Maintanance</li>
                    <li className='text-slate-500'>&#x2717; Marketing Campaign Consulting</li>              
                  </ul>
                  <p className='font-bold text-center'>Now Starting at Just</p>
                  <div class="flex items-center justify-center ">
                  <button className='button inline-block border-none rounded-xl bg-white bg-opacity-15 p-2 w-[80%] text-colorPurple 
                  text-5xl font-bold'><span className='text-3xl align-top font-bold'>$</span>999</button>
                  </div>
                  <p className='sub-title text-center underline underline-offset-4 pt-2'>Normally valued at $1599</p>
                  <div class="flex items-center justify-center ">
                  <Link className='button w-full mx-4 inline-block bg-colorWhite text-colorBackground rounded-md mt-8 mb-2'> Book us &#x27a4;  </Link>
                  </div>
                  <p className='sub-title text-center pb-8'>Terms of service Applies</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
