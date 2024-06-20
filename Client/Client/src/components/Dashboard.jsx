import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [task, setTask] = useState([])
    let url = 'http://localhost:4000/dashboard';
    // useEffect(() => {
    //         axios.get(url).then((res)=>{
    //                 console.log(res.data.data);
    //                 setTask(res.data.data);
    //                     setIsLoading(true)
    //          }).catch((err) => {
    //             console.log(err);
    //      })
    // },[]);
                
     let url2 = 'http://localhost:4000/verifyUser';

     const token = localStorage.getItem('token');
     useEffect(() =>{
    //     axios.get(url).then((res)=>{
    //         console.log(res.data.data);
    //         setTask(res.data.data);
    //             setIsLoading(true)
    //  }).catch((err) => {
    //     console.log(err);
    // })
        axios.get(url2,{
            headers:{
                Authorization: `Bearers ${token}`,
                "Content-Type": "Application/json",
                Accept: "Application/json",
            }
        }).then((res)=>{
            console.log(res.data);
            // setIsLoading(true)
            setTask(res.data.data);
            if(!res.data.status){
                localStorage.removeItem("token")
                navigate('/login')
            }
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
  return (
    <div className='text-3xl font-bold text-center mt-10'>
      Everything Gonna work out
      

   <div className="flex flex-col justify-center mt-10">
        { 
        !isLoading ? <h1>Loading</h1>:
          task.map((tasks)=>(
            <div key={tasks._id} className="flex flex-row justify-center px-10">
                <div className="w-[200px] ">
                <h1>{tasks.firstName}</h1>
                </div>
                <h1 className="text-center">{tasks.lastName}</h1>
            </div>
        ))
        }
    </div>
    </div>
  )
}

export default Dashboard
