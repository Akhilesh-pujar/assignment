import {BrowserRouter, Routes,Route} from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";


function App() {
 

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
      
 
  )
}

export default App
