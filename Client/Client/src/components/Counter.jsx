import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../Counter/CounterSlice.js"




const CounterS = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
       <div>{count}</div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default CounterS
