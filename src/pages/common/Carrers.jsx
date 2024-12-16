import TitleMessage from "../../components/reusable-elements/title-message";
import CareerWindow from "../../components/reusable-elements/Career-window";
const Careers = () => {
    return (
        <>
            <section id="section-careers">
                <div className='global-container main-wrapper relative overflow-hidden z-40'>
                    <TitleMessage
                        header='Lets Form Lasting Relationships'W
                        paragraph='We are more than just another digital service agency. We are a collective of inovators, creators, developers
            and changemakers, who dare to dream and disrupt. Average is not a part of our DNA, our teams make us extraordinary, join us today!'/>


                    <h2 className="text-center pb-4 lg:pb-8 lg:pt-8"> Discover open positions</h2>
                    <CareerWindow
                        header="Senor Web Developer"
                        career='Technology Department'
                        description={`For more information visit our post on the job board.
                        Denver, Colorado | Munich, Germany | Remote`} />
                        <CareerWindow
                        header="Data Engineer"
                        career='Product Team'
                        description={`For more information visit our post on the job board.
                        Munich, Germany | Remote`} />
                        <CareerWindow
                        header="AI-Prompt Engineer"
                        career='Technology Department'
                        description={`For more information visit our post on the job board.
                        Denver, Colorado | Remote`} />
                        <CareerWindow
                        header="Digital Marketing Specialist"
                        career='Marketing Team'
                        description={`For more information visit our post on the job board.
                        Remote`} />
                        <CareerWindow
                        header="Senor UX Designer"
                        career='Product Team'
                        description={`For more information visit our post on the job board.
                        Denver, Colorado | Remote`} />
                        <div className='h-[1px] w-full bg-[#DBD6CF] opacity-25' />
                        
                </div>
            </section>

        </>
    );
};

export default Careers;
