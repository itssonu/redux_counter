const CounterButton = (props)=>{
    return  (<button onClick={props.onClick} id={props.id}>{props.children}</button>);
}
export default CounterButton;