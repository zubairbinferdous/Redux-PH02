import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const buttonAdd = () => {
    dispatch(add());
  }
  const buttonRemove = () => {
    dispatch(remove());
  }

  const {count} = useSelector((state) => state.counter)

  return (
    <>
      <h1>counter with redux</h1>
      <button onClick={buttonAdd} >increment</button>
       <div className="div">{count}</div>
      <button onClick={buttonRemove}>decrement</button>
    </>
  )
}

export default App
 