import React, { useState, useEffect } from 'react';

const Pupup = () => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(false), 15000); // Auto close popup after 5 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showPopup && (
                <div className="absolute w-full min-h-screen">
                    <div className="fixed inset-0 flex items-end bg-colorBackground bg-opacity-20 z-50 ">

                        <div className="bg-colorBackground shadow-lg w-full ">
                        <div className='flex justify-end'>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="button  rounded-md bg-colorPurple border-none hover:bg-violet-600 py-2 m-6 px-4 md:mt-6 md:mr-6"
                                >
                                    x
                                </button>
                            </div>

                            <div className='global-container pb-8  '>
                            
                                <h2 className="font-bold mb-4">We care about your privacy!</h2>
                                <p className="hidden md:block ">
                                    By clicking Agree and Continue, the user acknoledges that they have read, understood and agreed to the entirety of these Terms of Service,
                                    exactly as specified by MicroBiz Media LLC. By continuing to access or utilize any of our services, you as user, visitor or a client agree
                                    to be bound by this Terms, which constitute a legally binding agreement.
                                </p>
                                <div className='flex flex-wrap gap-4 justify-end'>
                                    <button
                                        onClick={() => setShowPopup(false)}
                                        className="button flex  justify-center rounded-md bg-colorWhite border-none hover:bg-purple-100 text-colorBackground w-full md:w-auto text-center "
                                    >
                                        Read Terms of service
                                    </button>
                                    <button
                                        onClick={() => setShowPopup(false)}
                                        className="button flex  justify-center rounded-md bg-colorPurple border-none hover:bg-violet-600  w-full md:w-auto"
                                    >
                                        Agree and Continue &#x27a4;
                                    </button>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default Pupup;