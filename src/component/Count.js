import React from 'react'
import {selectCounter} from '../redux/slice/counterSlice'
import {useSelector} from 'react-redux'

function Count(props) {
  const count = useSelector(selectCounter)
  return (
    <h1 id="counter">{count}</h1>
  )
}

  
export default Count
