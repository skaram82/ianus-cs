import { useState, useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@skaram82/elections-2023-data-vizualizations-ianus";

function SurveyForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    user_id: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
  });
  const [errorVal, setErrorVal] = useState("");
  // define chart refs for embedding charts from observable
  const chart_treemapRef = useRef();
  const stepChart1Ref = useRef();
  const stepChart2Ref = useRef();
  const stepChart3Ref = useRef();
  const speedChart_mitsotakis_newRef = useRef();
  const legendSentimentRef = useRef();
  const speedChart_tsiprasRef = useRef();
  const legendSentiment2Ref = useRef();

  const handleNext = () => {
    if (step === 0) {
      if (formData.user_id === "" || formData.user_id.length <= 1) {
        setErrorVal("Please enter a valid user ID");
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } else if (step === 1) {
      setStep(step + 1);
    } else if (step === 2) {
      if (formData.q1 === "" || formData.q3 === "") {
        setErrorVal("Please answer the required fields");
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } else if (step === 3) {
      if (formData.q4 === "" || formData.q5 === "") {
        setErrorVal("Please answer the required fields");
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } else if (step === 4) {
      if (formData.q6 === "") {
        setErrorVal("Please answer the required fields");
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } 
    else if (step === 5) {
      if (formData.q7 === "" || formData.q8 === "") {
        setErrorVal("Please answer the required fields");
      } else {
        setErrorVal("");
        setStep(step + 1);
      }
    } else {
      setErrorVal("");
      setStep(0);
      setFormData({
        user_id: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
      })
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart_treemap") return new Inspector(chart_treemapRef.current);
      if (name === "StepChart1") return new Inspector(stepChart1Ref.current);
      if (name === "StepChart2") return new Inspector(stepChart2Ref.current);
      if (name === "StepChart3") return new Inspector(stepChart3Ref.current);
      if (name === "speedChart_mitsotakis_new") return new Inspector(speedChart_mitsotakis_newRef.current);
      if (name === "legendSentiment") return new Inspector(legendSentimentRef.current);
      if (name === "speedChart_tsipras") return new Inspector(speedChart_tsiprasRef.current);
      if (name === "legendSentiment2") return new Inspector(legendSentiment2Ref.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <div className="w-full px-24 py-4">   
    <ol className="flex items-center w-full mb-4 sm:mb-5">
      <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block text-blue-500 ${step === 0 ? "" : "after:border-blue-100"}`}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 bg-blue-100`}>
          <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 497 512">
            <path d="M 337 82 L 336 74 Q 329 40 295 33 L 287 32 Q 273 28 273 14 Q 277 0 291 0 L 300 1 Q 327 6 345 24 Q 363 42 368 69 L 369 78 Q 370 92 355 96 Q 341 97 337 82 L 337 82 Z M 81 69 Q 111 42 147 53 Q 152 43 160 35 Q 180 16 205 16 Q 231 16 251 35 L 369 153 L 369 148 Q 370 121 388 103 Q 406 84 433 84 Q 460 84 478 103 Q 496 121 497 148 L 497 306 Q 497 308 497 310 Q 497 311 497 311 Q 497 312 497 312 Q 495 397 439 453 Q 383 509 299 512 L 298 512 L 297 512 L 297 512 L 290 512 Q 208 511 149 453 L 36 340 Q 17 320 17 295 Q 17 269 36 250 Q 42 244 48 240 L 47 238 Q 28 219 28 193 Q 28 168 47 148 Q 55 140 66 135 Q 54 98 81 69 L 81 69 Z M 160 125 L 160 125 L 138 103 Q 126 93 115 103 Q 106 114 115 125 L 138 148 L 138 148 L 234 244 Q 248 261 234 278 Q 217 292 200 278 L 104 182 L 104 182 Q 92 172 81 182 Q 72 193 81 204 L 121 244 L 121 244 L 177 301 Q 191 318 177 335 Q 160 349 143 335 L 92 284 L 92 284 Q 81 274 70 284 Q 60 295 70 306 L 183 420 Q 228 463 290 464 L 297 464 L 297 464 L 298 464 L 298 464 Q 361 462 404 420 Q 446 378 449 314 Q 449 313 449 311 Q 449 308 449 306 L 449 148 Q 448 133 433 132 Q 418 133 417 148 L 417 211 Q 416 227 402 233 Q 387 239 376 228 L 217 69 Q 206 59 194 69 Q 185 80 194 91 L 290 188 Q 304 205 290 221 Q 273 235 256 221 L 160 125 L 160 125 Z M 15 368 Q 29 367 33 382 L 34 390 Q 41 424 75 431 L 83 432 Q 97 436 97 450 Q 93 465 79 464 L 70 463 Q 43 458 25 440 Q 7 422 2 395 L 1 386 Q 0 372 15 368 L 15 368 Z" />
          </svg>
        </div>
      </li>
      <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${step <= 2 ? "after:border-gray-100" : "after:border-blue-100"}`}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 1 ? "bg-blue-100" : "bg-gray-100"}`}>
          <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step >= 1 ? "text-blue-600" : "text-gray-600"}`} xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
            <path d="M 464 256 Q 464 199 436 152 L 436 152 Q 409 105 360 76 Q 311 48 256 48 Q 201 48 152 76 Q 103 105 76 152 Q 48 199 48 256 Q 48 313 76 360 Q 103 407 152 436 Q 201 464 256 464 Q 311 464 360 436 Q 409 407 436 360 Q 464 313 464 256 L 464 256 Z M 0 256 Q 1 186 34 128 L 34 128 Q 68 70 128 34 Q 189 0 256 0 Q 323 0 384 34 Q 444 70 478 128 Q 511 186 512 256 Q 511 326 478 384 Q 444 442 384 478 Q 323 512 256 512 Q 189 512 128 478 Q 68 442 34 384 Q 1 326 0 256 L 0 256 Z M 268 131 Q 280 138 280 152 L 280 336 L 320 336 Q 342 338 344 360 Q 342 382 320 384 L 256 384 L 192 384 Q 170 382 168 360 Q 170 338 192 336 L 232 336 L 232 193 L 212 205 Q 192 214 179 196 Q 170 176 188 163 L 244 131 Q 256 125 268 131 L 268 131 Z" />
          </svg>
        </div>
      </li>
      <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${step <= 3 ? "after:border-gray-100" : "after:border-blue-100"}`}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 3 ? "bg-blue-100" : "bg-gray-100"}`}>
          <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step >= 3 ? "text-blue-600" : "text-gray-600"}`} xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
            <path d="M 256 48 Q 313 48 360 76 L 360 76 Q 407 103 436 152 Q 464 201 464 256 Q 464 311 436 360 Q 407 409 360 436 Q 313 464 256 464 Q 199 464 152 436 Q 105 409 76 360 Q 48 311 48 256 Q 48 201 76 152 Q 105 103 152 76 Q 199 48 256 48 L 256 48 Z M 256 512 Q 326 511 384 478 L 384 478 Q 442 444 478 384 Q 512 323 512 256 Q 512 189 478 128 Q 442 68 384 34 Q 326 1 256 0 Q 186 1 128 34 Q 70 68 34 128 Q 0 189 0 256 Q 0 323 34 384 Q 70 444 128 478 Q 186 511 256 512 L 256 512 Z M 223 185 Q 234 176 248 176 L 251 177 Q 267 177 277 188 Q 288 198 288 214 Q 288 230 276 241 L 168 343 Q 157 354 162 369 Q 168 383 184 384 L 328 384 Q 350 382 352 360 Q 350 338 328 336 L 245 336 L 309 276 Q 335 250 336 214 Q 335 178 312 154 Q 288 130 252 128 L 249 128 Q 218 128 194 146 L 170 165 Q 153 180 165 198 Q 180 215 199 203 L 223 185 L 223 185 Z" />
          </svg>
        </div>
      </li>
      <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${step <= 4 ? "after:border-gray-100" : "after:border-blue-100"}`}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 4 ? "bg-blue-100" : "bg-gray-100"}`}>
          <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step >= 4 ? "text-blue-600" : "text-gray-600"}`} xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
            <path d="M 256 48 Q 313 48 360 76 L 360 76 Q 407 103 436 152 Q 464 201 464 256 Q 464 311 436 360 Q 407 409 360 436 Q 313 464 256 464 Q 199 464 152 436 Q 105 409 76 360 Q 48 311 48 256 Q 48 201 76 152 Q 105 103 152 76 Q 199 48 256 48 L 256 48 Z M 256 512 Q 326 511 384 478 L 384 478 Q 442 444 478 384 Q 512 323 512 256 Q 512 189 478 128 Q 442 68 384 34 Q 326 1 256 0 Q 186 1 128 34 Q 70 68 34 128 Q 0 189 0 256 Q 0 323 34 384 Q 70 444 128 478 Q 186 511 256 512 L 256 512 Z M 184 128 Q 162 130 160 152 Q 162 174 184 176 L 250 176 L 200 222 Q 189 234 194 249 Q 200 263 216 264 L 268 264 Q 283 264 293 274 Q 304 284 304 300 Q 304 315 294 326 Q 283 336 268 336 L 240 336 Q 219 335 207 318 L 204 314 Q 191 296 171 306 Q 154 319 164 339 L 166 343 Q 192 383 240 384 L 268 384 Q 304 383 327 359 Q 351 336 352 300 Q 351 267 330 244 Q 310 220 277 216 L 328 170 Q 339 158 334 143 Q 328 129 312 128 L 184 128 L 184 128 Z" />
          </svg>
        </div>
      </li>
      <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${step <= 5 ? "after:border-gray-100" : "after:border-blue-100"}`}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 5 ? "bg-blue-100" : "bg-gray-100"}`}>
          <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step >= 4 ? "text-blue-600" : "text-gray-600"}`} xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
            <path d="M 464 256 Q 464 199 436 152 L 436 152 Q 409 105 360 76 Q 311 48 256 48 Q 201 48 152 76 Q 103 105 76 152 Q 48 199 48 256 Q 48 313 76 360 Q 103 407 152 436 Q 201 464 256 464 Q 311 464 360 436 Q 409 407 436 360 Q 464 313 464 256 L 464 256 Z M 0 256 Q 1 186 34 128 L 34 128 Q 68 70 128 34 Q 189 0 256 0 Q 323 0 384 34 Q 444 70 478 128 Q 511 186 512 256 Q 511 326 478 384 Q 444 442 384 478 Q 323 512 256 512 Q 189 512 128 478 Q 68 442 34 384 Q 1 326 0 256 L 0 256 Z M 224 129 Q 244 138 239 160 L 201 272 L 272 272 L 272 216 Q 274 194 296 192 Q 318 194 320 216 L 320 272 L 328 272 Q 350 274 352 296 Q 350 318 328 320 L 320 320 L 320 360 Q 318 382 296 384 Q 274 382 272 360 L 272 320 L 168 320 Q 156 320 149 310 Q 142 300 145 288 L 193 144 Q 202 124 224 129 L 224 129 Z" />
          </svg>
        </div>
      </li>
      <li className="flex items-center after:w-full">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 6 ? "bg-blue-100" : "bg-gray-100"}`}>
            <svg className={`w-4 h-4 lg:w-6 lg:h-6 ${step === 6 ? "text-blue-600" : "text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
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
          <div className="py-4">      
          {/* Step 1 Form */}
            <div className={step !== 0 ? "hidden" : ""}>
              <h2 className="text-center">Welcome to the IANUS Case Studies</h2>
              <p className="text-center py-2">Before we start we'd like you to fill in your given user ID and answer the following questionnaires.</p>
              <div className="pt-4">
                <label htmlFor="name"><strong>User ID</strong></label>
                <input 
                required
                value={formData.user_id} 
                id="user_id" 
                type="text" 
                name="user_id" 
                onChange={e => setFormData({...formData, user_id: e.target.value})}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                />
              </div>
              <div className="py-2 text-center mt-10">
                <a href="" target="_blank" className="mx-2"><span className="btn rounded-full my-2 md:my-0 w-full md:w-fit bg-amber-700 text-white hover:bg-amber-800">Consent Form</span></a>
                <a href="" target="_blank" className="mx-2"><span className="btn rounded-full my-2 md:my-0 w-full md:w-fit bg-amber-700 text-white hover:bg-amber-800">Pre-study Surveys</span></a>
              </div>
            </div>
            {/* Step 2 Form */}         
            <div className={step !== 1 ? "hidden" : ""}>
              <h2 className="text-center">Task 1</h2>
              <p className="text-left py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea labore, ullam eius facilis at fugit. Officiis molestiae impedit voluptas similique ad quidem, quas hic praesentium illum excepturi, eveniet, eum assumenda laboriosam nam. Quis, animi. Repellendus ab corrupti beatae aliquam, veritatis exercitationem natus aut dolore tempora consequuntur dignissimos nam laboriosam.</p>
              <div className="py-4" ref={chart_treemapRef} />
              <hr className="mt-5" />
              <p className="text-center pt-5">Do you find the above analysis sufficient or would like to read the speech yourself?</p>
              <div className="py-2 text-center mt-10">
                <a href="" target="_blank" className="mx-2"><span className="btn rounded-full my-2 md:my-0 w-full md:w-fit bg-amber-700 text-white hover:bg-amber-800">Read the speech</span></a>
              </div>              
            </div>  
            <div className={step !== 2 ? "hidden" : ""}>
              <h2>Task 1: Questions</h2>
              <div className="pt-4">
                <div>
                  <label htmlFor="q1"><strong>Question 1: Did you press the button to read the speech?</strong></label>
                  <fieldset className="flex justify-end">
                    <label htmlFor="q1-yes" className="px-2"><strong>Yes</strong></label>
                    <input 
                    required
                    value="Yes"
                    id="q1-yes" 
                    type="radio" 
                    name="q1" 
                    checked={formData.q1 === "Yes"}
                    onChange={e => setFormData({...formData, q1: e.target.value})}
                    className="px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                    <label htmlFor="q1-no" className="px-2"><strong>No</strong></label>
                    <input 
                    required
                    value="No"
                    id="q1-no" 
                    type="radio" 
                    name="q1" 
                    checked={formData.q1 === "No"}
                    onChange={e => setFormData({...formData, q1: e.target.value})}
                    className="px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                  </fieldset>
                </div>
                <div>
                  <label htmlFor="q2"><strong>Question 2: Why yes/no?</strong></label>
                  <input 
                  value={formData.q2} 
                  id="q2" 
                  type="text" 
                  name="q2" 
                  onChange={e => setFormData({...formData, q2: e.target.value})}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                  />
                </div>
                <div className="pt-4">
                  <label htmlFor="q3"><strong>Question 3: Did you read the speech (partially or entirely)?</strong></label>
                  <fieldset className="flex justify-end">
                    <label htmlFor="q3-yes" className="px-2"><strong>Yes</strong></label>
                    <input 
                    required
                    value="Yes"
                    id="q3-yes" 
                    type="radio" 
                    name="q3" 
                    checked={formData.q3 === "Yes"}
                    onChange={e => setFormData({...formData, q3: e.target.value})}
                    className="px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                    <label htmlFor="q3-no" className="px-2"><strong>No</strong></label>
                    <input 
                    required
                    value="No"
                    id="q3-no" 
                    type="radio" 
                    name="q3" 
                    checked={formData.q3 === "No"}
                    onChange={e => setFormData({...formData, q3: e.target.value})}
                    className="px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                  </fieldset>
                </div>
              </div>
            </div>
            {/* Step 3 Form */}    
            <div className={step !== 3 ? "hidden" : ""}>
              <h2 className="text-center">Task 2 - Questions</h2>
              <p className="text-left pt-4">The step charts below depict the evolution of the level of polarization or populism during a political speech, with the number of paragraphs shown on the horizontal axis. Each paragraph, depending on the value of the polarization and populism indicators it has received, is placed in a category:</p>
              <ul className="text-left py-2 list-disc">
                <li>no or low level (polarization or populism respectively) if it has a value from 0 to 0.5,</li>
                <li>medium level if it has a value from 0.51 to 0.8,</li>
                <li>high level if it has a value from 0.81 to 1.</li>
              </ul>
              <p className="text-left py-2">If you wish, hover over the chart to read the corresponding paragraph.</p>
              <div className="grid gap-5 grid-cols-2">
                <div className="col-span-2">
                  <div ref={stepChart2Ref} />
                  <div className="pt-4">
                    <label htmlFor="q4 text-center"><strong>Question 4: I believe the results given in this chart are accurate</strong></label>
                    <fieldset className="flex justify-center py-2">
                      <label htmlFor="q4-1" className="px-2"><strong>Not at all</strong></label>
                      <input 
                      required
                      value="1"
                      id="q4-1" 
                      type="radio" 
                      name="q4" 
                      checked={formData.q4 === "1"}
                      onChange={e => setFormData({...formData, q4: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="2"
                      id="q4-2" 
                      type="radio" 
                      name="q4" 
                      checked={formData.q4 === "2"}
                      onChange={e => setFormData({...formData, q4: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="3"
                      id="q4-3" 
                      type="radio" 
                      name="q4" 
                      checked={formData.q4 === "3"}
                      onChange={e => setFormData({...formData, q4: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="4"
                      id="q4-4" 
                      type="radio" 
                      name="q4" 
                      checked={formData.q4 === "4"}
                      onChange={e => setFormData({...formData, q4: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="5"
                      id="q4-5" 
                      type="radio" 
                      name="q4" 
                      checked={formData.q4 === "5"}
                      onChange={e => setFormData({...formData, q4: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <label htmlFor="q4-5" className="px-2"><strong>Definitely</strong></label>
                    </fieldset>
                  </div>
                </div>
                <div className="col-span-2">
                  <div ref={stepChart1Ref} />
                  <div className="pt-4">
                    <label htmlFor="q5 text-center"><strong>Question 5: I believe the results given in this chart are accurate</strong></label>
                    <fieldset className="flex justify-center py-2">
                      <label htmlFor="q5-1" className="px-2"><strong>Not at all</strong></label>
                      <input 
                      required
                      value="1"
                      id="q5-1" 
                      type="radio" 
                      name="q5" 
                      checked={formData.q5 === "1"}
                      onChange={e => setFormData({...formData, q5: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="2"
                      id="q5-2" 
                      type="radio" 
                      name="q5" 
                      checked={formData.q5 === "2"}
                      onChange={e => setFormData({...formData, q5: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="3"
                      id="q5-3" 
                      type="radio" 
                      name="q5" 
                      checked={formData.q5 === "3"}
                      onChange={e => setFormData({...formData, q5: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="4"
                      id="q5-4" 
                      type="radio" 
                      name="q5" 
                      checked={formData.q5 === "4"}
                      onChange={e => setFormData({...formData, q5: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="5"
                      id="q5-5" 
                      type="radio" 
                      name="q5" 
                      checked={formData.q5 === "5"}
                      onChange={e => setFormData({...formData, q5: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <label htmlFor="q5-5" className="px-2"><strong>Definitely</strong></label>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 4 Form */}    
            <div className={step !== 4 ? "hidden" : ""}>
              <h2 className="text-center">Task 3 - Questions</h2>
              <p className="text-left pt-4">The step chart below (same as the second one in previous step) is produced in a collaboration between ChatGPT [link] and Data Journalists from the Incubator for Media Education and Development (iMedD) [link], a non-profit organization with a mission to support the transparency and independence in journalism and promoting meritocracy and excellence in the field. iMedD was founded in 2018 with the exclusive donation of the Stavros Niarchos Foundation (SNF).  </p>
              <div className="pt-4">
                <div ref={stepChart3Ref} />
                <div className="pt-4">
                  <label htmlFor="q6 text-center"><strong>Question 6: I believe the results produced by ChatGPT and validated by data journalists  given in this chart are accurate:</strong></label>
                  <fieldset className="flex justify-center py-2">
                    <label htmlFor="q6-1" className="px-2"><strong>Not at all</strong></label>
                    <input 
                    required
                    value="1"
                    id="q6-1" 
                    type="radio" 
                    name="q6" 
                    checked={formData.q6 === "1"}
                    onChange={e => setFormData({...formData, q6: e.target.value})}
                    className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                    <input 
                    required
                    value="2"
                    id="q6-2" 
                    type="radio" 
                    name="q6" 
                    checked={formData.q6 === "2"}
                    onChange={e => setFormData({...formData, q6: e.target.value})}
                    className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                    <input 
                    required
                    value="3"
                    id="q6-3" 
                    type="radio" 
                    name="q6" 
                    checked={formData.q6 === "3"}
                    onChange={e => setFormData({...formData, q6: e.target.value})}
                    className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                    <input 
                    required
                    value="4"
                    id="q6-4" 
                    type="radio" 
                    name="q6" 
                    checked={formData.q6 === "4"}
                    onChange={e => setFormData({...formData, q6: e.target.value})}
                    className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                    <input 
                    required
                    value="5"
                    id="q6-5" 
                    type="radio" 
                    name="q6" 
                    checked={formData.q6 === "5"}
                    onChange={e => setFormData({...formData, q6: e.target.value})}
                    className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                    />
                    <label htmlFor="q6-5" className="px-2"><strong>Definitely</strong></label>
                  </fieldset>
                </div>
              </div>   
            </div>
            {/* Step 5 Form */}    
            <div className={step !== 5 ? "hidden" : ""}>
              <h2 className="text-center">Task 4 - Questions</h2>
              <p className="text-left pt-4">The following analysis refers to the sentiment detectable in the political speeches themselves and is not at all related to audience emotions.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 py-2">
                  <h5 className="text-center">Kyriakos Mitsotakis</h5>
                  <div ref={speedChart_mitsotakis_newRef} />
                  <div ref={legendSentimentRef} />
                  <div className="pt-4">
                    <label htmlFor="q7 text-center"><strong>Question 7: I believe the results produced by ChatGPT and validated by data journalists  given in this chart are accurate.</strong></label>
                    <fieldset className="flex justify-center py-2">
                      <label htmlFor="q7-1" className="px-2"><strong>Not at all</strong></label>
                      <input 
                      required
                      value="1"
                      id="q7-1" 
                      type="radio" 
                      name="q7" 
                      checked={formData.q7 === "1"}
                      onChange={e => setFormData({...formData, q7: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="2"
                      id="q7-2" 
                      type="radio" 
                      name="q7" 
                      checked={formData.q7 === "2"}
                      onChange={e => setFormData({...formData, q7: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="3"
                      id="q7-3" 
                      type="radio" 
                      name="q7" 
                      checked={formData.q7 === "3"}
                      onChange={e => setFormData({...formData, q7: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="4"
                      id="q7-4" 
                      type="radio" 
                      name="q7" 
                      checked={formData.q7 === "4"}
                      onChange={e => setFormData({...formData, q7: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="5"
                      id="q7-5" 
                      type="radio" 
                      name="q7" 
                      checked={formData.q7 === "5"}
                      onChange={e => setFormData({...formData, q7: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <label htmlFor="q7-5" className="px-2"><strong>Definitely</strong></label>
                    </fieldset>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 py-2">
                  <div className="pt-4">
                    <h5 className="text-center">Alexis Tsipras</h5>
                    <div ref={speedChart_tsiprasRef} />
                    <div ref={legendSentiment2Ref} />
                    <label htmlFor="q8 text-center"><strong>Question 8: I would use such a political discourse exploration tool again.</strong></label>
                    <fieldset className="flex justify-center py-2 mt-6">
                      <label htmlFor="q8-1" className="px-2"><strong>Not at all</strong></label>
                      <input 
                      required
                      value="1"
                      id="q8-1" 
                      type="radio" 
                      name="q8" 
                      checked={formData.q8 === "1"}
                      onChange={e => setFormData({...formData, q8: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="2"
                      id="q8-2" 
                      type="radio" 
                      name="q8" 
                      checked={formData.q8 === "2"}
                      onChange={e => setFormData({...formData, q8: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="3"
                      id="q8-3" 
                      type="radio" 
                      name="q8" 
                      checked={formData.q8 === "3"}
                      onChange={e => setFormData({...formData, q8: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="4"
                      id="q8-4" 
                      type="radio" 
                      name="q8" 
                      checked={formData.q8 === "4"}
                      onChange={e => setFormData({...formData, q8: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <input 
                      required
                      value="5"
                      id="q8-5" 
                      type="radio" 
                      name="q8" 
                      checked={formData.q8 === "5"}
                      onChange={e => setFormData({...formData, q8: e.target.value})}
                      className="mx-2 px-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5" 
                      />
                      <label htmlFor="q8-5" className="px-2"><strong>Definitely</strong></label>
                    </fieldset>
                  </div>
                </div>
              </div>   
            </div>   
            <div className={step !== 6 ? "hidden" : ""}>
              <h2 className="text-center">Submit your answers</h2>
              <p className="text-center pt-4">Thank you for your participation in the IANUS case studies.</p>
              <p className="text-center py-2">Before you submit your answers, we’d like you to answer some relevant questions.</p>
              <div className="py-2 text-center mt-10">
                <a href="" target="_blank" className="mx-2"><span className="btn rounded-full my-2 md:my-0 w-full md:w-fit bg-amber-700 text-white hover:bg-amber-800">Post-study Surveys</span></a>
              </div>
            </div>
          </div>
          <div className={`text-center text-red-300 ${errorVal === "" ? "" : "pt-5"}`}>{errorVal}</div>
        <div className={`mt-12 flex ${step === 0 ? "justify-end" : "justify-between"}`}>
          {/* previous step button */}
        <button type="button" onClick={handlePrev} className={`btn btn-primary ${step === 0 ? "hidden" : ""}`}>
          {step > 0 && 
          <div>
            <svg className="inline pe-2 align-middle" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 384">
              <path d="M 9 169 Q 0 179 0 192 L 0 192 Q 0 205 9 215 L 169 375 Q 179 384 192 384 Q 205 384 215 375 Q 224 365 224 352 Q 224 339 215 329 L 109 224 L 416 224 Q 430 224 439 215 Q 448 206 448 192 Q 448 178 439 169 Q 430 160 416 160 L 109 160 L 215 55 Q 224 45 224 32 Q 224 19 215 9 Q 205 0 192 0 Q 179 0 169 9 L 9 169 L 9 169 Z" />
            </svg>
            <span>Previous</span>
          </div>}
        </button>
        {/* next step button */}
        <button type="button" onClick={handleNext} className={`btn btn-primary ${step === 6 ? "hidden" : ""}`} >
        <div>
          <span>Next</span>
          <svg className="inline ps-2 align-middle" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 384">
            <path d="M 439 215 Q 448 205 448 192 L 448 192 Q 448 179 439 169 L 279 9 Q 269 0 256 0 Q 243 0 233 9 Q 224 19 224 32 Q 224 45 233 55 L 339 160 L 32 160 Q 18 160 9 169 Q 0 178 0 192 Q 0 206 9 215 Q 18 224 32 224 L 339 224 L 233 329 Q 224 339 224 352 Q 224 365 233 375 Q 243 384 256 384 Q 269 384 279 375 L 439 215 L 439 215 Z" />
          </svg>          
        </div>
        </button>
        {/* submit form button */}
        <button type="submit" className={`btn btn-primary ${step !== 6 ? "hidden" : ""}`}>
          Submit
        </button>
      </div>
      </form>
    </div>
  )
}

export default SurveyForm;