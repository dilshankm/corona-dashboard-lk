import fetchReducer from './fetch'
import toggleReducer from './toggle'
import sidenavReducer from './sidenav'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    fetch: fetchReducer,
    toggle: toggleReducer,
    side: sidenavReducer
})

export default allReducers