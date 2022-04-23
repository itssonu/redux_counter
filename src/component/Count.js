import React from 'react'
import {connect} from 'react-redux'

function Count(props) {
  return (
    <h1 id="counter">{props.count}</h1>
  )
}

function mapStateToProps(state) {
    const { count } = state.counterReducer
    return { count }
  }
  
export default connect(mapStateToProps)(Count)
