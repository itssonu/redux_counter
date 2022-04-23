import './Counter.css';
import Count from './Count'
import CounterButton from './CounterButton'
import { increment, decrement, reset } from '../redux/slice/counterSlice';
import { useDispatch } from 'react-redux';

const Counter = (props)=>{
 const dispatch = useDispatch();
    return (
    <div className="wrap">
    <Count/>
    <div className="wrap-btns">
      <CounterButton onClick={()=>dispatch(increment())} id='increment'>+</CounterButton>
      <CounterButton onClick={()=>dispatch(decrement())} id='decrement'>-</CounterButton>
      <CounterButton onClick={()=>dispatch(reset())} id='reset'>Reset</CounterButton>
    </div>
  </div>)
}

export default Counter