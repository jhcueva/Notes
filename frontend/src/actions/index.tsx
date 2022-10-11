import { isAuthenticated } from './types'

export const setAuthentication = (payload) => ({
  type: isAuthenticated,
  payload,
});