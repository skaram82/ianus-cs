import React from "react";

function Step3({formData, setFormData}) {
  return (
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
  )
}

export default Step3;