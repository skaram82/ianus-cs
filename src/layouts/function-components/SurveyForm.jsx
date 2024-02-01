import { useState } from "react";

function SurveyForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    info: '',
  });
  const [errorVal, setErrorVal] = useState("");

  const handleNext = () => {
    if (step === 0) {
      if (formData.name === "" || formData.name.length <= 1) {
        setErrorVal("Please enter a valid name");
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } else if (step === 1) {
      if (formData.email === "" || !formData.email.includes("@")) {
        setErrorVal("Please enter a valid email address")
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } else if (step === 2) {
      if (formData.info === "") {
        setErrorVal("Please leave a valid info content");
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } else {
      setErrorVal("");
      setStep(0);
      setFormData({
        name: '',
        email: '',
        info: '',
        feedback: ''
      })
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-full px-24 py-4">   
    <ol className="flex items-center w-full mb-4 sm:mb-5">
        <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block text-blue-500 ${step === 0 ? "" : "after:border-blue-100"}`}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 bg-blue-100`}>
                <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg>
                {/* Step 1 */}
            </div>
        </li>
        <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${step <= 1 ? "after:border-gray-100" : "after:border-blue-100"}`}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 1 ? "bg-blue-100" : "bg-gray-100"}`}>
                <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step === 1 ? "text-blue-600" : "text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
                    <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>
                </svg>
                {/* Step 2 */}
            </div>
        </li>
        <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block ${step <= 2 ? "after:border-gray-100" : "after:border-blue-100"}`}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 2 ? "bg-blue-100" : "bg-gray-100"}`}>
                <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step === 2 ? "text-blue-600" : "text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
                    <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>
                </svg>
                {/* Step 3 */}
            </div>
        </li>
        <li className="flex items-center after:w-full">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 3 ? "bg-blue-100" : "bg-gray-100"}`}>
                <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step === 3 ? "text-blue-600" : "text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                </svg>
                {/* Step 4 */}
            </div>
        </li>
    </ol>
    <form
        data-netlify = "true"
        netlify-honeypot = "bot-field"
        name="survey"
        method="POST"
        action="/success"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="survey" />
          <div>            
            <div className={step !== 0 ? "hidden" : ""}>
              <h2>Step 1</h2>
              <label htmlFor="name">Name</label>
              <input 
              required
              value={formData.name} 
              id="name" 
              type="text" 
              name="name" 
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>            
            <div className={step !== 1 ? "hidden" : ""}>
              <h2>Step 2</h2>
              <label htmlFor="email">Email</label>
              <input 
              required
              value={formData.email} 
              id="email" 
              type="email" 
              name="email" 
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>            
            <div className={step !== 2 ? "hidden" : ""}>
              <h2>Step 3</h2>
              <label htmlFor="info">Info</label>
              <input 
              required
              value={formData.info} 
              id="info" 
              type="text" 
              name="info" 
              onChange={e => setFormData({...formData, info: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>            
            <div className={step !== 3 ? "hidden" : ""}>
              <h2>Step 4</h2>
              Please submit your entries.
            </div>
          </div>
          <div className={`text-center ${errorVal === "" ? "" : "pt-5"}`}>{errorVal}</div>
        <div className={`mt-32 flex ${step === 0 ? "justify-end" : "justify-between"}`}>          
        <button type="button" onClick={handlePrev} className={`btn btn-primary ${step === 0 ? "hidden" : ""}`}>
          {step > 0 && "Back"}
        </button>
        <button type="button" onClick={handleNext} className={`btn btn-primary ${step === 3 ? "hidden" : ""}`} >
          Next
        </button>
        <button type="submit" className={`btn btn-primary ${step !== 3 ? "hidden" : ""}`}>
          Submit
        </button>
      </div>
      </form>
    </div>
  )
}

export default SurveyForm;