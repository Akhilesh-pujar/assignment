import {BrowserRouter, Routes,Route} from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
 

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
      
 
  )
}

export default App
