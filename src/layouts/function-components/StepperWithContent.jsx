import React from "react";
// import { Stepper, Step } from "@material-tailwind/react";
// import { TbTargetArrow } from "react-icons/tb/index.js";
 
export function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [isLastStep, setIsLastStep] = React.useState(false);
  // const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [stepCount, setStepCount] = React.useState(0);
  const [formEntries, setFormEntries] = React.useState({
    name: "",
    email: "",
    feedback: ""
  });
 
  // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  // const stepsObj = {
  //   0: ["Step 1", "Details about your account."],
  //   1: ["Step 2", "Details about your account."],
  //   2: ["Step 3", "Details about your account."]
  // };

  const handleNext = () => {
    setStepCount(stepCount + 1);
    setActiveStep(stepCount);
  }

  const handlePrev = () => {
    setStepCount(stepCount - 1);
    setActiveStep(stepCount);
  }

  const stepsArr = ["Step 1", "Step 2", "Step 3"];
 
  return (
    <div className="w-full px-24 py-4">   
    <ol className="flex items-center w-full mb-4 sm:mb-5">
        <li className={`flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b ${activeStep === 0 ? "after:border-blue-100" : "after:border-gray-100"} after:border-4 after:inline-block`}>
            <div className={`flex items-center justify-center w-10 h-10 ${activeStep === 0 ? "bg-blue-100" : "bg-gray-100"} rounded-full lg:h-12 lg:w-12 shrink-0`}>
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
    <form
        netlify = "true"
        netlify-honeypot = "true"
        name="feedback"
        method="POST"
        action="/success"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="feedback" />
        {(stepCount == 0) ? (
          <div>
            <label htmlFor="name">Name</label>
            <input value={formEntries.name} id="name" type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" />
          </div>
        ) : (stepCount == 1) ? (
          <div>
            <label htmlFor="email">Email</label>
            <input value={formEntries.email} id="email" type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required />
          </div>
        ) : (
          <div>
            <label htmlFor="feedback">What is your feedback?</label>
            <textarea value={formEntries.feedback} id="feedback" wrap="soft" name="feedback" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required></textarea>
            <button className="btn btn-primary mt-10" type="submit">Submit</button>
          </div>
        )}        
      </form>

      <div className="mt-32 flex justify-between">
        <button type="button" onClick={handlePrev} className={stepCount == 0 ? "btn rounded-full bg-gray-200" : "btn btn-primary"} disabled={stepCount == 0 ? true : false}>
          {stepCount == 0 ? "Start" : `Previous Step: ${stepsArr[stepCount - 1]}`}
        </button>
        <button type="button" onClick={handleNext} className={stepCount == stepsArr.length - 1 ? "btn rounded-full bg-gray-200" : "btn btn-primary"} disabled={stepCount == stepsArr.length - 1 ? true : false}>
          {stepCount == stepsArr.length - 1 ? "End" : `Next Step: ${stepsArr[stepCount + 1]}`}
        </button>
      </div>





    {/* <form name="form1">
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">Invoice details</h3>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="username.example" required="" />
            </div> */}
            {/* <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" />
            </div>                        <div>
                <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" />
            </div> */}
        {/* </div>
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form1" value="feedback" />
        <div className="mt-32 flex justify-between">
        <button type="button" onClick={handlePrev} className="btn btn-primary" disabled={isFirstStep}>
            Previous Step: lorem
        </button>
        <button type="button" onClick={handleNext} className="btn btn-primary" disabled={isLastStep}>
            Next Step: lorem
        </button>
        </div>
        
    </form> */}

      {/* <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <TbTargetArrow className="h-5 w-5 place-items-center" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className={activeStep === 0 ? "text-blue-700" : "text-gray-400"}>Step 1</h6>
            <p className={activeStep === 0 ? "text-blue-700 font-normal" : "text-gray-400 font-normal"}>test 1</p>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <TbTargetArrow className="h-5 w-5 place-items-center" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className={activeStep === 1 ? "text-blue-700" : "text-gray-400"}>Step 2</h6>
            <p className={activeStep === 1 ? "text-blue-700 font-normal" : "text-gray-400 font-normal"}>test 2</p>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <TbTargetArrow className="h-5 w-5 place-items-center" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <h6 className={activeStep === 2 ? "text-blue-700" : "text-gray-400"}>Step 3</h6>
            <p className={activeStep === 2 ? "text-blue-700 font-normal" : "text-gray-400 font-normal"}>test 3</p>
          </div>
        </Step>
      </Stepper> */}
      {/* <div className="mt-32 flex justify-between">
        <button type="button" className="btn btn-primary" onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </button>
        <button  type="button" className="btn btn-primary" onClick={handleNext} disabled={isLastStep}>
          Next
        </button>
      </div> */}
      {/* <section className="section relative">
        {activeStep === 0 ? (
          <div>
            <h3>Content for Step 1</h3>
            <form name="form1" className="max-w-sm mx-auto">
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form1" value="feedback" />
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        ) : activeStep === 1 ? (
          <div>
            Content for Step 2
          </div>
        ) : (
          <div>
            Content for Step 3
          </div>
        )
        }
      </section> */}
    </div>
  );
}

export default StepperWithContent;