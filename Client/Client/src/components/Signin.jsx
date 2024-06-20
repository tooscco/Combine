import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const url = 'https://combine-phi.vercel.app/login';

    const setLogin=(e)=>{
        e.preventDefault()
        axios.post(url, {email, password})
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem("token", res.data.token);
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
      <form action="" className="flex flex-col max-w-[420px] mx-auto mt-20 p-5 space-y-6 items-center border">
        <div className="space-2 text-2xl font-bold">
            <h1>Welcome back</h1>
        </div>
        <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="email" 
            placeholder="enter Your Email" 
            className="w-96 p-4 outline-none border border-black rounded"
            onChange={(e) =>setEmail(e.target.value)}
            id="email"/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="password"
             placeholder="enter Your Password"
             className="w-96 p-4 outline-none border border-black rounded"
             onChange={(e) =>setPassword(e.target.value)}
             id="password"/>
        </div>
        <div>
            <button 
            onClick={setLogin}
            className="p-3 mt-2 w-56 bg-green-500 rounded-lg text-white text-xl font-bold">
                Sign IN
            </button>
        </div>
      </form>
    </div>
  )
}

export default Signin
