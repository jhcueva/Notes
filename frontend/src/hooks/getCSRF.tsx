export const getCSRF = async () => {
  return fetch('/v1/accounts/csrf/', {
    method: 'GET'
  })
}