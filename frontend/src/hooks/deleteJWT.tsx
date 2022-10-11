import Cookies from 'js-cookie'

export const deleteJWT = async () => {
  const jwtResponse = await fetch('v1/api/blacklistjwt/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('access')
    },
    body: JSON.stringify({ refresh_token: `${Cookies.get('refresh')}` })
  })

  console.log("Token: ", { 'refresh_token': `${Cookies.get('refresh')}` })
  console.log("Logout: ", jwtResponse)
  console.log("Logout status: ", jwtResponse.status)
}