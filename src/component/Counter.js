import './Counter.css';
import Count from './Count'
import CounterButton from './CounterButton'

const Counter = (props)=>{
    return (
    <div class="wrap">
    <Count/>
    <div class="wrap-btns">
      <CounterButton id='increment'>+</CounterButton>
      <CounterButton id='decrement'>-</CounterButton>
      <CounterButton id='reset'>Reset</CounterButton>
    </div>
  </div>)
}
export default Counter