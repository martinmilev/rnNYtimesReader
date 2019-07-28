import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axiosMiddleware from './axiosMiddleware'
import reducers from '../redux/rootReducer'

export default () => {
  const initialState = {}
  const middleware = [axiosMiddleware, thunk]
  return createStore(reducers, initialState, applyMiddleware(...middleware))
}
