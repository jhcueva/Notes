export const useSignUp = async (inputs, crsf) => {
  const signupData = await fetch('/v1/accounts/signup/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': crsf
    },
    body: JSON.stringify(inputs)
  })
  const response = await signupData.json()

  if (signupData.status !== 201) {
    console.log(signupData.status)
    return response
  } else {
    return signupData.status
  }
}