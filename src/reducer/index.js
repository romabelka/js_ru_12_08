import { combineReducers } from 'redux'
import counterReducer from './counter'
import articleReducer from './articles'
import filters from './filters'

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
    filters
})
