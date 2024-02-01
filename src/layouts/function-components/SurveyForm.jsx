import React, {useState} from "react";
import Step1 from "@layouts/function-components/Step1.jsx";
import Step2 from "@layouts/function-components/Step2.jsx";
import Step3 from "@layouts/function-components/Step3.jsx";
import Step4 from "@layouts/function-components/Step4.jsx";

function SurveyForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    info: '',
    feedback: ''
  });

  const stepsComponent = () => {
    switch (step) {
      case 0: 
        return <Step1 formData={formData} setFormData={setFormData} />;
        case 1: 
        return <Step2 formData={formData} setFormData={setFormData} />;
        case 2: 
        return <Step3 formData={formData} setFormData={setFormData} />;
        case 3: 
        return <Step4 formData={formData} setFormData={setFormData} />;
      default: 
        return <Step1 formData={formData} setFormData={setFormData} />;
    };
  };

  // const handleNext = (e) => {
  //   if (step === 4) {
  //     e.preventDefault();
  //     fetch("/survey", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: formData,
  //     })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       // Handle successful form submission
  //       console.log('Form submitted successfully');
  //       console.log(formData)
  //       // Reset form data or navigate to a success page
  //     })
  //     .catch((error) => alert(error));
  //   } else {
  //     setStep(step + 1);
  //   };
  // };
  
  // const handleNext = () => {
  //   if (step === 4) {
  //     console.log(formData);
  //   } else {
  //     setStep(step + 1);
  //   };
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: new URLSearchParams(formData).toString(),
  //     })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       // Handle successful form submission
  //       console.log('Form submitted successfully');
  //       console.log(formData);
  //       navigate("/success");
  //       // Reset form data or navigate to a success page
  //     })
  //     .catch((error) => alert(error));
  // };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  // console.log(step);

  return (
    <div className="w-full px-24 py-4">   
    <ol className="flex items-center w-full mb-4 sm:mb-5">
        <li className="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                {/* <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg> */}
            </div>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                {/* <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
                    <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>
                </svg> */}
            </div>
        </li>
        <li className="flex items-center w-full">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                {/* <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                </svg> */}
            </div>
        </li>
    </ol>
    {/* <form name="survey" data-netlify = "true" netlify-honeypot = "bot-field" action="/success" method="POST" hidden> */}
    {/* <form name="survey" data-netlify = "true" netlify-honeypot = "bot-field" hidden>
      <input id="name" type="text" name="name" value={formData.name} readOnly />
      <input id="email" type="email" name="email" value={formData.email} readOnly />
      <input id="info" type="text" name="info" value={formData.info} readOnly />
      <input id="feedback" type="text" name="feedback" value={formData.feedback} readOnly />
    </form> */}
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
          <>
            <h2>Step 1</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input 
              value={formData.name} 
              id="name" 
              type="text" 
              name="name" 
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
            <h2>Step 2</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input 
              value={formData.email} 
              id="email" 
              type="email" 
              name="email" 
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
            <h2>Step 3</h2>
            <div>
              <label htmlFor="info">Info</label>
              <input 
              value={formData.info} 
              id="info" 
              type="text" 
              name="info" 
              onChange={e => setFormData({...formData, info: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
            <h2>Step 4</h2>
            <div>
              <label htmlFor="feedback">Feedback</label>
              <input 
              value={formData.feedback} 
              id="feedback" 
              type="text" 
              name="feedback" 
              onChange={e => setFormData({...formData, feedback: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
          </>
        {/* {stepsComponent()} */}
        {/* {(step === 0) ? (
          <>
            <h2>Step 1</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input 
              value={formData.name} 
              id="name" 
              type="text" 
              name="name" 
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
          </>
        ) : (step === 1) ? (
          <>
            <h2>Step 2</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input 
              value={formData.email} 
              id="email" 
              type="email" 
              name="email" 
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
          </>
        ) : (step === 2) ? (
          <>
            <h2>Step 3</h2>
            <div>
              <label htmlFor="info">Info</label>
              <input 
              value={formData.info} 
              id="info" 
              type="text" 
              name="info" 
              onChange={e => setFormData({...formData, info: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
          </>
        ) : (
          <>
            <h2>Step 4</h2>
            <div>
              <label htmlFor="feedback">Feedback</label>
              <input 
              value={formData.feedback} 
              id="feedback" 
              type="text" 
              name="feedback" 
              onChange={e => setFormData({...formData, feedback: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              />
            </div>
          </>
        )} */}
        {/* <button className="btn btn-primary mt-10" type="submit">Submit</button> */}
        <div className={`mt-32 flex ${step === 0 ? "justify-end" : "justify-between"}`}>
        {/* <button type="button" onClick={handlePrev} className={`btn btn-primary ${step === 0 && "hidden"}`}>
          {step > 0 && "Back"}
        </button> */}
        {/* <button type={step === 4 ? "submit" : "button"} onClick={handleNext} className= "btn btn-primary">
          {step === 3 ? "Submit" : "Next"}
        </button> */}
        {/* <button type="button" onClick={handleNext} className={`btn btn-primary ${step === 3 && "hidden"}`} >
          Next
        </button> */}
        {/* <button type="submit" className={`btn btn-primary ${step !== 3 && "hidden"}`}>
          Submit
        </button> */}
        <button type="submit" className={`btn btn-primary`}>
          Submit
        </button>
      </div>
      </form>
    </div>
  )
}

export default SurveyForm;