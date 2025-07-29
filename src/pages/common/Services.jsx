import TitleMessage from '../../components/reusable-elements/title-message';
import ServicesIcons from '../../components/reusable-elements/services-icons';
import { Link } from 'react-router-dom';

const Services = () => {

  return (
    <>
      <section id='section-services'>
        <div className='global-container relative   overflow-hidden z-40 '>
          <TitleMessage
            header='Full Service Digital Partnership'
            paragraph='By working with us you get an entire team of experienced designers, developers, copy writers, data analists and 
                     system administrators, our goal is to produce real results and propel you towards endless growth.'/>

          <ServicesIcons title="Services" />

          <h2 id="target-pricing" className='jos mx-auto  pb-4 lg:pb-8 max-w-[715px] text-center scroll-mt-24' >Packages</h2>

          <div className='flex justify-center flex-wrap gap-10 mb-8 lg:mb-12' >

            <div className='jos  overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15   inline-block ' data-jos_animation='zoom' >
              <div className='bg-colorBackground'>
                <h3 className='pt-14 text-center'>Business Standard</h3>
                <ul className='p-8  space-y-2'>
                  <li className=''><span className='text-green-500 font-bold'>✓</span> Web Design and Development</li>
                  <li className=''><span className='text-green-500 font-bold'>✓</span> Domain Registration and Hosting</li>
                  <li className='text-slate-500'>&#x2717; Brand Strategy and Logo</li>
                  <li className='text-slate-500'>&#x2717; Annual Design Improvements</li>
                  <li className='text-slate-500'>&#x2717; Ongoing Maintanance</li>
                  <li className='text-slate-500'>&#x2717; Marketing Campaign Consulting</li>
                </ul>
                <p className='font-bold text-center'>Now Starting at Just</p>
                <div className="flex items-center justify-center ">
                  <button className='button inline-block border-none rounded-xl bg-white bg-opacity-15 p-2 w-[80%] text-colorPurple 
                  text-5xl font-bold'><span className='sub-title text-3xl align-top'>$</span>999</button>
                </div>
                <p className='sub-title text-center underline underline-offset-4 pt-2 text-sm'>Normally valued at $1599</p>
                <div className="flex items-center justify-center ">
                  <Link to='/web/contact' className='button w-full mx-4 inline-block bg-colorWhite text-colorBackground rounded-md mt-8 mb-2'> Book us &#x27a4;  </Link>
                </div>
                <p className='sub-title text-center pb-8 text-sm'>Terms of service Applies</p>
              </div>

            </div>

            <div
              className='jos block box-border  rounded-2xl  border-[12px] border-colorPurple bg-colorBackground'
              data-jos_animation='zoom'
            >

              <div className='relative top-[-26px] left-[83px]  button inline-block border-none text-center bg-colorPurple px-8 py-2 rounded-[8px] '>Best Value</div>

              <div>
                <h3 className='pt-2 text-center'>Business Elite</h3>
                <ul className='p-8 space-y-2'>
                  <li><span className='text-green-500 font-bold'>✓</span> Web Design and Development</li>
                  <li><span className='text-green-500 font-bold'>✓</span> Domain Registration and Hosting</li>
                  <li><span className='text-green-500 font-bold'>✓</span> Brand Strategy and Logo</li>
                  <li><span className='text-green-500 font-bold'>✓</span> Annual Design Improvements</li>
                  <li><span className='text-green-500 font-bold'>✓</span> Ongoing Maintanance</li>
                  <li><span className='text-green-500 font-bold'>✓</span> Marketing Campaign Consulting</li>
                </ul>
                <p className='font-bold text-center'>Now Starting at Just</p>
                <div className="flex items-center justify-center ">
                  <button className='button inline-block border-none rounded-xl bg-white bg-opacity-15 p-2 w-[80%] text-colorPurple 
                  text-5xl font-bold'><span className='sub-title text-3xl align-top'>$</span>1499</button>
                </div>
                <p className='sub-title text-center underline underline-offset-4 pt-2 text-sm'>Normally valued at $2499</p>
                <div className="flex items-center justify-center ">
                  <Link to='/web/contact' className='button w-full mx-4 inline-block bg-colorWhite text-colorBackground rounded-md mt-8 mb-2'> Book us &#x27a4;  </Link>
                </div>
                <p className='sub-title text-center pb-8 text-sm'>Terms of service Applies</p>
              </div>

            </div>









          </div>

        </div>

      </section>
    </>
  );
};

export default Services;
