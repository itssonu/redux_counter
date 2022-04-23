import './Counter.css';
import Count from './Count'
import CounterButton from './CounterButton'
import { connect } from 'react-redux';

const Counter = (props)=>{
    return (
    <div className="wrap">
    <Count/>
    <div className="wrap-btns">
      <CounterButton onClick={props.increment} id='increment'>+</CounterButton>
      <CounterButton onClick={props.decrement} id='decrement'>-</CounterButton>
      <CounterButton onClick={props.reset} id='reset'>Reset</CounterButton>
    </div>
  </div>)
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}
export default connect(null,mapDispatchToProps)(Counter)