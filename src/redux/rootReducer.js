import { combineReducers } from 'redux'
import newsSourceReducer from './newsSource/newsSourceReducers'

const rootReducer = combineReducers({
    newsSource: newsSourceReducer
})

export default rootReducer