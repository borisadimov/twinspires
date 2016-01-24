import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import login from './modules/login'

export default combineReducers({
  counter,
  login,
  router
})
