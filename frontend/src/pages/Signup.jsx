
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
import logo from "../assets/logo.svg"
// import { usernameState, phoneState, lastNameState, passwordState } from "../states";
 const Signup = () => {
  
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    employeeSize: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try{
      const res = await fetch("http://localhost:3000/api/v1/user/signup", {
          method: "POST",
          body: JSON.stringify({
            username: formData.username,
            phone: formData.phone,
            companyName: formData.companyName,
            companyEmail: formData.companyEmail,
            employeeSize: formData.employeeSize,
             
          }),
          headers: {
              "Content-Type": "application/json"
          }
      });

      if(!res.ok){
          alert("HTTP error! status: " + res.status);
         
          return;
      }

      const data = await res.json();

      alert(data.msg);

      localStorage.setItem("myToken", data.token)
      navigate("/dashboard")
  }catch(err){
      console.log("Request Crashed!" ,err);
  }
    console.log('Form submitted:', formData)
    
  }


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
                <input id="username" name="username" type="text" required  value={formData.username} onChange={handleInputChange}/>
              </div>
              <div>
                <label htmlFor="phone">Phone no.</label>
                <input id="phone" name="phone" type="text" required value={formData.phone} onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" name="companyName" type="text" required  value={formData.companyName} onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="companyEmail">Company Email</label>
                <input id="companyEmail" name="companyEmail" type="email" required  value={formData.companyEmail} onChange={handleInputChange}/>
              </div>
              <div>
                <label htmlFor="employeeSize">Employee Size</label>
                <input
    id="employeeSize"
    name="employeeSize" // Corrected name attribute
    type="text"
    required
    value={formData.employeeSize}
    onChange={handleInputChange}
  />
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