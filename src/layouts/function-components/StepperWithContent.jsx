import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { TbTargetArrow } from "react-icons/tb/index.js";
 
export function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const stepsObj = {
    0: ["Step 1", "Details about your account."],
    1: ["Step 2", "Details about your account."],
    2: ["Step 3", "Details about your account."]
  };
 
  return (
    <div className="w-full px-24 py-4">
      <Stepper
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
      </Stepper>
      <div className="mt-32 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
      <section class="section relative">
        {activeStep === 0 ? (
          <div>
            <h3>Content for Step 1</h3>
            <form name="form1" class="max-w-sm mx-auto">
              <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              {/* hidden section to keep bots away */}
              <p class="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form1" value="feedback" />
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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
      </section>
    </div>
  );
}

export default StepperWithContent;