import { isAuthenticated, userInformation } from './types'

export const setAuthentication = (payload) => ({
  type: isAuthenticated,
  payload,
});

export const setUserInformation = (payload) => ({
  type: userInformation,
  payload
})