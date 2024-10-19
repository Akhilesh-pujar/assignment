
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { usernameState, phoneState, lastNameState, passwordState } from "../states";
const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useRecoilState(usernameState);
  const [phone, setphone] = useRecoilState(phoneState);
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [password, setPassword] = useRecoilState(passwordState);

  const [showLoader, setShowLoader] = useState(false);

  async function handleSignup() {
      setShowLoader(true)
      try{
          const res = await fetch("http://localhost:3000/api/v1/user/signup", {
              method: "POST",
              body: JSON.stringify({
                  username: username,
                  phone: phone,
                  lastName: lastName,
                  password: password
              }),
              headers: {
                  "Content-Type": "application/json"
              }
          });
  
          if(!res.ok){
              alert("HTTP error! status: " + res.status);
              setShowLoader(false);
              return;
          }
  
          const data = await res.json();
  
          alert(data.msg);

          localStorage.setItem("myToken", data.token);

          setShowLoader(false)
          navigate("/home/dashbord")
      }catch(err){
          console.log("Request Crashed!");
      }
  }

  function navigateToSignin(){
      navigate("/home/signin");
  }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex-shrink-0">
          <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Logo" />
        </div>
      </div>
    </header>

    <main className="flex-grow flex items-center justify-end py-12 px-4 sm:px-6 lg:px-8 pr-[10%]">
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
              <input id="name" name="name" type="text" required value={formData.name} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="phone">Phone no.</label>
              <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={e => setphone(e.target.value)} />
            </div>
            <div>
              <label htmlFor="companyName">Company Name</label>
              <input id="companyName" name="companyName" type="text" required value={formData.companyName} onChange={handleinputChange} />
            </div>
            <div>
              <label htmlFor="companyEmail">Company Email</label>
              <input id="companyEmail" name="companyEmail" type="email" required value={formData.companyEmail} onChange={handleinputChange} />
            </div>
            <div>
              <label htmlFor="employeeSize">Employee Size</label>
              <Select name="employeeSize" value={formData.employeeSize} onValueChange={(value) => setFormData(prev => ({ ...prev, employeeSize: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employee size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="500+">500+</SelectItem>
                </SelectContent>
              </Select>
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
            <Button type="submit" className="w-full">
              Proceed
            </Button>
          </div>
        </form>
      </div>
    </main>
  </div>
  )
}

export default Signup