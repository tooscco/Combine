import axios from 'axios';
import { useState } from 'react';

const ListOfStudent = () => {
    const [data, setData] = useState ()
    const url = 'http://localhost:4000/';

    const getData = ()=>{
        axios.get(url).then((res) => {
            console.log(res.data);
            setData(res.data)

        }).catch((error) =>{
            console.log(error);
        })
    }
    
  return (
    <div>
      
      <h1>Fetch</h1>
      <button onClick={getData} className="bg-green-500 py-2 px-3 mt-2 text-white">Get Data</button>

    {/* {data.map((task)=>(
        <div key={task}>
            <h1>{task.email}</h1>
        </div>
    ))
    } */}

    </div>
  )
}

export default ListOfStudent
