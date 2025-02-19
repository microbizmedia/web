
import TitleMessage from "../../../components/reusable-elements/title-message";
import ProcessWindow from "../../../components/reusable-elements/process-window";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const Faq_01 = () => {
  const ProcessPageLink = (
    <Link
      to="/process"
      className="text-colorPurple "
    >
      process
    </Link>
  );
  const PricePageLink = (
    <HashLink to='/services#target-pricing' className='text-colorPurple'>
      prices
    </HashLink>
  );
  const ServicesPageLink = (
    <Link to='/services' className='text-colorPurple'>
      services
    </Link>
  );
  const EmailUsPageLink = (
    <Link to='/customer-service' className='text-colorPurple'>
      Email us
    </Link>
  );
  const FullCycleProcessPageLink = (
    <Link to='/process' className='text-colorPurple'>
      Full-Cycle Proccess
    </Link>
  );



  return (

    <>
      <main className='main-wrapper relative overflow-hidden '>

        {/*...::: FAQ Section Start :::... */}
        <section className='faq-section global-container'>
          <TitleMessage
            header='FAQ'
            paragraph='Frequently Asked Questions and answers.' />


          <h2 className="text-center pb-4 lg:pb-8 lg:pt-8">Questions and answers get updated as needed</h2>
          <ProcessWindow
            header='1. How long does it take you to design and develop a website?'
            paragraph={<>Answer : Project timelines vary based on complexity but typically range from 1-4 weeks for standard websites, while more advanced sites and features may take longer. For a more precise estemate you can navigate to our {ProcessPageLink} page.</>}
          />
          <ProcessWindow
            header='2. How much will it cost to make my website?'
            paragraph={<>Answer : Costs depend on the project scope. Simple websites may start at a few hundred to a thousand dollars, while larger projects (e-commerce, custom platforms, complex features) can cost several thousands, for more visit our {PricePageLink} page.</>}
          />
          <ProcessWindow
            header='3. Do you offer SEO services?'
            paragraph={<>Answer : Yes, we offer a standard on-page SEO during development as a default! But we also offer more inclusive packages such as advanced keyword targeting, content optimisation and monthly analytics updates, read our {ServicesPageLink} page for more.</>}
          />
          <ProcessWindow
            header='4. What if I need ongoing support or updates?'
            paragraph={<>Answer : Dont worry, we got you covered, we can offer you ongoing maintenance and hands on support, we will take care of your security and peace of mind, we remove any bugs that may occur during standard plugin updates visit our {PricePageLink} page to learn more.</>}
          />
          <ProcessWindow
            header='5. I already have a website but i want to change something?'
            paragraph={<>Answer : We are happy to have your business, we appreciate you and we value you, but for such projects we would like to take a look at the work first and then we can discuss what the right course of action for your specific case would be, {EmailUsPageLink}.</>}
          />
          <ProcessWindow
            header='6. What makes your service different from competitors?'
            paragraph={<>Answer : We actually care! As a small business we know the struggles of balancing time and resources so we have efficiency and competence in our DNA. With us you will get on time delivery, 24/7 customer service support, monthly updates and most importantly we give you the time to spend on your loved ones, knowing that we have your back with our {FullCycleProcessPageLink}.</>}
          />
          
          <div
                className=' jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 mb-8 lg:mb-12 mx-auto p-0'
                data-jos_animation='zoom'
            >
                <div className='bg-colorBackground px-4 py-10 lg:py-14 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                    <h3>7. I have a question that is not answered already!</h3>
                    <p className='pt-6'>Thats great, our customer service team is happy to assist you.</p>
                    <div className='flex  justify-end pt-4'>
                    <Link to='/web/contact' className='button w-full sm:w-auto inline-block sm:self-end bg-colorWhite text-colorBackground rounded-md px-10'>Email Us &#x27a4;  </Link> 
                    </div>
                </div>
            </div>   

        </section>
      </main>
    </>
  );
};

export default Faq_01;
