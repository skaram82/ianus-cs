import React from "react";

function Step4({formData, setFormData}) {
  return (
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
  )
}

export default Step4;