import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UserProfile = () => {
    const {username} = useParams()
    let url = `https://api.github.com/users/${username}`;
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        axios.get(url)
       .then((res)=>{
        setData(res.data)
        setIsLoading(true)
       }).catch((err) => {
        console.log(err);
       });
    })
  return (
    <div>
      
            <div className="relativ">
               <img src={data.avatar_url} alt="Profile"  width={640} height={360} className="w-full h-48 object-cover"/>
               <div></div>
            </div>
            
    </div>
  )
}

export default UserProfile
