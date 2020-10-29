import { combineReducers, compose, createStore } from 'redux'
import userReducer from './reducers/userReducer'
import reducers from './reducers'
// const AllReducer = combineReducers({

// })




const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store

// , compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

