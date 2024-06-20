
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center  flex-col space-y-6 mt-10'>
      <h1 className='text-4xl text-blue-400'>This is not the page you are looking for.</h1>
      <p className='text-center text-3xl text-blue-300'>404</p>
      <button className='bg-red-200 rounded-md p-4  text-blue-900' onClick={() => navigate('/')}>Go back to Home page</button>
    </div>
  )
}

export default Notfound
