import { LOGIN } from '../actions'

function login (state = {isLogin: false}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {isLogin: true})

    default:
      return state
  }
}

export default login

