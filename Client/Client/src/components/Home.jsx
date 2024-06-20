import axios from "axios"
import { useState } from "react"


const Home = () => {
    const  [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    let url ='https://api.github.com/search/repositories?q=XXX'
    const home =()=>{
        axios.get(url)
        .then((res)=>{
            setData(res.data.items)
            console.log(res.data.items);
            setIsLoading(true)
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <div>
      <button onClick={home}>Home</button>
      </div>
      <div className="flex flex-row flex-wrap space-y-4">
      {
          !isLoading? <h1>Loading</h1>:
      data.map((items)=>(  
            <div key={items.id} className="flex flex-col w-[200px] ms-10 my-5 shadow-lg py-5 text-center">
                <img src={items.owner.avatar_url} alt="" />
                <h1>
                    {items.name}
                </h1>
                <h1>
                    {items.login}
                </h1>
                <h1>
                    {items.private}
                </h1>
            </div>
      ))
      }
      </div>
    </div>
  )
}

export default Home
