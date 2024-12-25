import React, { useState, useEffect } from 'react';

const Pupup = () => {
    const [currentDate, setCurrentDate] = useState('');

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      // Check if terms have been previously accepted or declined
      const hasAcceptedTerms = localStorage.getItem('termsAccepted');
      if (!hasAcceptedTerms) {
        setShowPopup(true); // Show the popup only if no record exists
      }
    }, []);
  
    const handleAccept = () => {
      localStorage.setItem('termsAccepted', 'true'); // Save acceptance in localStorage
      setShowPopup(false); // Hide the popup
    };
  
    const handleDecline = () => {
      localStorage.setItem('termsAccepted', 'false'); // Save decline in localStorage
      setShowPopup(false); // Hide the popup
    };
  
    // if (!showPopup) return null; // Don't render if the popup is hidden
    
    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString();
        setCurrentDate(formattedDate);
      }, []);

    return showPopup ? ( 
                <div className="absolute w-full min-h-screen">
                    <div className="fixed inset-0 flex items-end bg-colorBackground bg-opacity-20 z-50 ">

                        <div className="bg-colorBackground shadow-lg w-full ">
                        <div className='flex justify-end'>
                                <button
                                    onClick={handleDecline}
                                    className="pupup-close-symbol button rounded-md bg-colorPurple border-none text-3xl
                                     py-3 px-1 m-4  md:mb-0"
                                >
                                    <span />
                                </button>
                            </div>

                            <div className='global-container pb-4  '>
                            
                                <h2 className="mb-2">We care about your privacy!</h2>
                                <p className="mb-2 text-sm sub-title">Last Updated: {currentDate}</p>
                                <p className="hidden md:block mb-2 text-sm sub-title">
                                    By clicking Agree and Continue, the user acknoledges that they have read, understood and agreed to the entirety of these Terms of Service,
                                    exactly as specified by MicroBiz Media LLC. By continuing to access or utilize any of our services, you as user, visitor or a client agree
                                    to be bound by this Terms, which constitute a legally binding agreement.
                                </p>
                                <div className='flex flex-wrap gap-4 justify-end'>
                                    <button
                                        onClick={handleDecline}
                                        className="button flex  justify-center rounded-md bg-colorWhite border-none text-colorBackground w-full md:w-auto text-center "
                                    >
                                        Read Terms of service
                                    </button>
                                    <button
                                        onClick={handleAccept}
                                        className="button flex  justify-center rounded-md bg-colorPurple border-none w-full md:w-auto"
                                    >
                                        Agree and Continue &#x27a4;
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    ) : null;
}

export default Pupup;