import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('UserInfo') ? JSON.parse(localStorage.getItem('UserInfo')) : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store