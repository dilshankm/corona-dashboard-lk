import fetchReducer from './fetch'
import toggleReducer from './toggle'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    fetch: fetchReducer,
    toggle: toggleReducer
})

export default allReducers