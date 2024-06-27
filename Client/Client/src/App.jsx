import { Navigate, Route, Routes } from "react-router-dom"
import ListOfStudent from "./components/List-of-student"
import Register from "./components/Register"
import Signin from "./components/Signin"
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import Notfound from "./components/Not-found"
import Home from "./components/Home"
import User from "./components/User"
import ShowApi from "./ShowApi"
import ShowNav from "./ShowNav"
import Logout from "./components/Logout"
import UserProfile from "./UserProfile"
import Formik from "./components/Formik"
import CounterS from "./components/Counter"

const App = () => {
  


  let authToken = localStorage.getItem("token");
  console.log(authToken);
  return (
    <div>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route exact path="/" element={<ListOfStudent />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/register" element={ <Register />}/>
        <Route path="/login" element={<Signin />}/>
        <Route path="/counter" element={<CounterS />}/>
        <Route path="/formik" element={<Formik />}/>
        <Route path='/users' element={<User />} />
        <Route path='/users/user/:username' element={<UserProfile />}/>
        <Route path='/login' element={<Logout />}/>
      </Route>
        <Route path="*" element={<Notfound />} />
        
        <Route path="/" element={<ShowNav />} >
        <Route path="/dashboard" element={authToken? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/showapi" element={<ShowApi />} />
        </Route>
      </Routes>
     
      
    </div>
  )
}

export default App
