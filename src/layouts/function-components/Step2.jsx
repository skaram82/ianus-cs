import React from "react";

function Step2({formData, setFormData}) {
  return (
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
  )
}

export default Step2;