import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const url = 'https://combine-ikmb.onrender.com/register';

   const registerUser=(e)=>{
    e.preventDefault()
    // console.log(firstName,lastName,email,password);
    axios.post(url, {firstName, lastName, email, password})
    .then((res)=>{
        console.log(res.data);
        navigate('/login')
    }).catch((err)=>{
        console.log(err);
    })
    }
  return (
    <div>
      <form  className="mx-auto max-w-[420px] space-y-6 border mt-6 p-5 shadow-lg">
        <div className="flex flex-col items-center justify-center gas-4 space-y-2">
            <div className="flex flex-col">
                <label htmlFor="">First Name</label>
                <input type="text" 
                placeholder="enter First Name" 
                className="w-96 p-4 outline-none border border-black rounded" 
                id="firstName" 
                onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Last Name</label>
                <input type="text" 
                placeholder="enter Last Name" 
                className="w-96 p-4 outline-none border border-black rounded" 
                id="lastName" 
                onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input type="email" 
                placeholder="enter Email" 
                className="w-96 p-4 outline-none border border-black rounded" 
                id="email" 
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input type="password" 
                placeholder="enter Password" 
                className="w-96 p-4 outline-none border border-black rounded" 
                id="password"
                 onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <button type="submit" 
                className="p-3 mt-2 w-56 bg-green-500 rounded-lg text-white text-xl font-bold"
                onClick={registerUser}>
                    signup
                </button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Register
