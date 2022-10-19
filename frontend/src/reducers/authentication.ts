import { isAuthenticated, userInformation } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  loading: false,
  username: "",
  email: "",
}

export const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case isAuthenticated:
      return {...state, isAuthenticated: action.payload }
    case userInformation:
      return {...state, }
    default:
      return state
  }
}