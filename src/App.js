// import './App.css';
import Counter from './component/Counter'
import {Provider} from 'react-redux';
import store from './redux/store/index';

function App() {
  
store.subscribe(() => console.log(store.getState().counterReducer))

store.dispatch({ type: 'INCREMENT' })

  return (
    <Provider store={store}>
    <Counter/>
    </Provider>
  );
}

export default App;
