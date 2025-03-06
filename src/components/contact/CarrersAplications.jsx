import TitleMessage from '../reusable-elements/title-message';
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const jobTitles = [
    "full-stack-developer-intern-(javascript)",
    "frontend-developer-intern-(react.js)",
];

const CareersAplications = () => {
    const { jobTitle } = useParams(); // Get jobTitle from the URL
    const navigate = useNavigate(); // For redirecting
    const formattedJobTitle = jobTitle
        .replace(/-/g, " ") // Replace dashes with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
    const fileInputRef = useRef(null); // Create a ref for the file input
    const [fileName, setFileName] = useState("Upload Resume*");
    const [validationErrors, setValidationErrors] = useState([]);
    const [formData, setFormData] = useState({
        candidateName: '',
        yearsOfExperience: '',
        email: '',
        location: '',
        message: '',
        resume: null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!jobTitles.includes(jobTitle)) {
            navigate("/web/*", { replace: true }); // Redirect to 404 page    
        }
    }, [jobTitle, navigate]); // Runs whenever jobTitle changes



    useEffect(() => {
        if (isSubmitted || validationErrors.length > 0) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 60000); // 1 minute

            return () => clearTimeout(timer);
        }
    }, [isSubmitted, validationErrors]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, resume: file || null })); // Update resume in formData
        setFileName(file ? file.name : "Upload Resume*"); // Update file label
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Disable button while submitting
        // Create FormData object for file upload
        const applicationData = new FormData();
        applicationData.append("positionName", formattedJobTitle);
        applicationData.append("candidateName", formData.candidateName);
        applicationData.append("email", formData.email);
        applicationData.append("location", formData.location);
        applicationData.append("yearsOfExperience", formData.yearsOfExperience);
        applicationData.append("message", formData.message);
        applicationData.append("resume", formData.resume); // Attach file

        try {
            const response = await fetch("http://localhost:5000/apply", {
                method: "POST",
                body: applicationData,
            });
            const result = await response.json();
            if (response.ok) {
                // console.log("Application submitted successfully:", result);
                setIsSubmitted(true);
                // Reset form data
                setFormData({
                    candidateName: "",
                    yearsOfExperience: "",
                    email: "",
                    location: "",
                    message: "",
                    resume: null, // Reset resume in formData
                });
                // Reset file input value
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""; // Clear the file input
                }
                setFileName("Upload Resume*"); // Reset file label
            } else {
                if (result.errors) {
                    setIsSubmitted(false)
                    setValidationErrors(result.errors); // Store errors in state
                } else {
                    alert("Failed to submit application. Please try again.");
                }
            }
        } catch (error) {
            // console.error("Error submitting application:", error);
            alert("An error occurred. Please try again.");
        }finally {
            setIsLoading(false); // Re-enable button after submission
          }
    };

    return (
        <>
            <main className='main-wrapper  relative overflow-hidden'>
                {/*...::: 404 Section Start :::... */}
                <section id='affiliate-section' className='global-container'>
                    <TitleMessage
                        header="Join Our Team!"
                        paragraph="Apply today and take the next step in your career with us." />
                    <div data-jos_animation='zoom' className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15  mb-8 lg:mb-12 ' >

                        <form className="w-full  rounded-lg px-4 lg:px-16 pt-8 md:pt-14 md:pb-4" onSubmit={handleSubmit}>
                            <h3 className="mb-8">Apply for {jobTitle ? formattedJobTitle : "a Position"}</h3>

                            {/* Four placeholders */}
                            <div className="flex flex-wrap gap-4 lg:grid grid-rows-2 grid-cols-2">
                                <input
                                    type="text"
                                    name="candidateName"
                                    value={formData.candidateName}
                                    onChange={handleChange}
                                    spellCheck="false"
                                    placeholder="Full Name*"
                                    className="bg-colorPurple/70 placeholder:text-colorWhite/50  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    spellCheck="false"
                                    placeholder="Email Address*"
                                    className="bg-colorPurple/70 placeholder:text-colorWhite/50  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                />
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    type="tel"
                                    spellCheck="false"
                                    placeholder="Location"
                                    className="bg-colorPurple/70 placeholder:text-colorWhite/50  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                />
                                <input
                                    type="text"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleChange}
                                    spellCheck="false"
                                    placeholder="Years of experience"
                                    className="bg-colorPurple/70 placeholder:text-colorWhite/50  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                />
                            </div>
                            {/* Text area */}
                            <div className="mt-4 mb-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="What interests you about working for MicroBiz Media?*"
                                    className="bg-colorPurple/70 placeholder:text-colorWhite/50  text-white w-full border 
                                        border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            {/* Button */}
                            <label
                                htmlFor="resume-upload"
                                className="bg-colorPurple/70 text-colorWhite/90 border border-gray-600
                                            rounded-lg flex items-center justify-center cursor-pointer
                                            text-center w-full h-[42px] max-w-full  "    >
                                {fileName}
                            </label>
                            <input
                                id="resume-upload"
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                ref={fileInputRef} // Attach the ref to the file input
                            />

                            <p className='text-colorPurple sub-title tracking-wider slide-from-bottom text-center  m-auto text-sm mt-1'>
                                Fields that contain a *star*(*) are considered mandatory fields.
                            </p>
                            <input
                                type="submit"
                                disabled={isLoading}
                                value={isLoading ? 'Sending...' : 'Submit'}
                                className=" mt-4 w-full bg-colorWhite text-colorBackground font-bold py-2 px-4 rounded-lg cursor-pointer"
                            />
                           
              
                
                            <p className='sub-title tracking-wider slide-from-bottom text-center  mx-auto mt-1 text-sm'>
                                By submitting your application, you agree to our Terms of Service and Privacy Policy.
                            </p>
                            {showMessage ? (
                                isSubmitted ? (
                                    <p className="text-green-500 text-center py-1 md:pt-3 md:pb-0">Thank you for applying! We’ll review your application and reach out if there’s a fit.</p>
                                ) : validationErrors.length > 0 ? (
                                    <div className="text-red-500 text-center py-1 md:pt-3 md:pb-0">
                                        {validationErrors.map((error, index) => (
                                            <p key={index}>{error.msg}</p>
                                        ))}
                                    </div>
                                ) : null
                            ) : (
                                <p className="py-1 md:pt-3 md:pb-0 opacity-0">.</p> // Keeps the space occupied
                            )}
                        </form>
                    </div>
                    {/* Section Spacer */}
                </section>
            </main>
        </>
    );
};

export default CareersAplications;
