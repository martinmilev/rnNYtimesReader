import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axiosMiddleware from './axiosMiddleware'
import reducers from '../redux/rootReducer'
import { articlesMiddleware } from './articlesMiddleware'

export default () => {
  const initialState = {}
  const middleware = [thunk, axiosMiddleware, ...articlesMiddleware]
  return createStore(reducers, initialState, applyMiddleware(...middleware))
}
