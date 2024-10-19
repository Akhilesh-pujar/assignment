
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import logo from "../assets/logo.svg"
// import { usernameState, phoneState, lastNameState, passwordState } from "../states";
 const Signup = () => {
  const [formData,setFormData] = useState(""); 
  const [employeeSize, setEmployeeSize] = useState('');
  const handleSubmit = ()=>{
   console.log("clicked");
  }
  const handleChange = (e) => {
    setEmployeeSize(e.target.value); // Update the state when the user selects a value
  };
  


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex-shrink-0">
      
          <img className="h-8 w-auto" src={logo} alt="Logo" />

          
        </div>
      </div>
    </header>
   
    <main className="flex-grow flex items-center justify-end py-12 px-4 sm:px-6 lg:px-8 pr-[10%]">
    <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 bg-primary text-primary-foreground">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Lorem Ipsum</h2>
            <p className="mb-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
        
          </div>
        </div>
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Lorem ipsum is simply dummy text
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required  />
              </div>
              <div>
                <label htmlFor="phone">Phone no.</label>
                <input id="phone" name="phone" type="tel" required  />
              </div>
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" name="companyName" type="text" required  />
              </div>
              <div>
                <label htmlFor="companyEmail">Company Email</label>
                <input id="companyEmail" name="companyEmail" type="email" required  />
              </div>
              <div>
                <label htmlFor="employeeSize">Employee Size</label>
                <select
        name="employeeSize"
        value={employeeSize} // Binds the state value
        onChange={handleChange} // Calls the handler when the value changes
        placeholder="Select employee size"
      >
        <option value="" disabled>Select employee size</option>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        <option value="51-200">51-200</option>
        <option value="201-500">201-500</option>
        <option value="500+">500+</option>
      </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Terms & Conditions
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full">
                Proceed
              </button>
            </div>
          </form>
        </div>
      </main>

   
  </div>
  )
}

export default Signup