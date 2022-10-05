export const getCSRF = async () => {
  const response = await fetch('/v1/account/users/csrf/', {
    method: 'GET'
  })
}