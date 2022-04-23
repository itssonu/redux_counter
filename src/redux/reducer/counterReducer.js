const initialState = {
    count:0
}

function counterReducer(state=initialState, action) {

    switch (action.type) {

        case 'INCREMENT':
            return {...initialState,count:++state.count}        
        case 'DECREMENT':
            return {...initialState,count:--state.count}        
        case 'RESET':
            return {...initialState,count:0}
    
        default:
            return {...initialState,count:state.count}
    }
  
}

export default counterReducer