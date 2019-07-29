import { combineReducers } from 'redux'
import articles from './modules/articles'
import range from './modules/range'

export default combineReducers({ articles, range })
