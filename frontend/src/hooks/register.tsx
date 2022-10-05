export const register = async (inputs, crsf) => {
  const registerData = await fetch('/v1/account/users/signup/', {
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': crsf
    },
    body: JSON.stringify(inputs)
  })
  const response = await registerData.json()
  if (registerData.status !== 201) {
    console.log("Error: ", registerData.status)
    return response
  } else {
    console.log("Status: ", registerData.status)
    return [registerData.status]
  }
}