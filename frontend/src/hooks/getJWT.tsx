import Cookies from 'js-cookie'

export const getJWT = async (userData: {}) => {
  const jwtResponse = await fetch('v1/api/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })

  const jwt = await jwtResponse.json()

  console.log(jwt)

  if (jwtResponse.status === 200){
    Cookies.set('access', jwt.access, {
      expires: 1,
      secure: true,
      sameSite: 'strict'
    })
    Cookies.set('refresh', jwt.refresh, {
      expires: 1,
      secure: true,
      sameSite: 'strict'
    })
  }
}