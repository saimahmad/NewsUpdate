import { combineReducers } from 'redux'
import newsSourceReducer from './newsSource/newsSourceReducer'
import newsListReducer from './newsList/newsListReducer'

const rootReducer = combineReducers({
    newsSource: newsSourceReducer,
    newsList: newsListReducer
})

export default rootReducer