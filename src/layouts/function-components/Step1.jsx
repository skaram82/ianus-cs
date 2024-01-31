import React from "react";

function Step1({formData, setFormData}) {
  return (
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
  )
}

export default Step1;