import Cookies from 'js-cookie'

export const getNotes = async () => {
  const response = await fetch('/v1/api/notes/', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('access')
    },
  })
  const data = await response.json()
  console.log("Data ALL: ", data)
  console.log("Cookie", Cookies.get('access'))
  return data
}

export const getNote = async (id: number) => {
  if (typeof id == 'number') {
    const response = await fetch(`/v1/api/notes/${id}/`)
    const data = await response.json()
    return (data)
  }

}