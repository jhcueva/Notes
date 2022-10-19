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
  return data
}

export const getNote = async (id: number) => {
  if (typeof id == 'number') {
    const response = await fetch(`/v1/api/${id}/note/`)
    const data = await response.json()
    return (data)
  }

}