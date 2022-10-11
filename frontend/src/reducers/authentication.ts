import { isAuthenticated } from '../actions/types'

const initialState = {
  isAuthenticated: false 
}

export const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case isAuthenticated:
      return {...state, isAuthenticated: action.payload }
    default:
      return state
  }
}