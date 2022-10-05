export const useLogin = async (formInputs, csrf) => {
  const loginData = await fetch('/v1/account/users/login/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrf
    },
    body: JSON.stringify(formInputs)
  })
  
  const response = await loginData.json()

  if (loginData.status !== 201) {
    return response
  } else {
    return loginData.status
  }
}
