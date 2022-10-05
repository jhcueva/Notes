export const getNotes = async () => {
  const response = await fetch('/v1/api/notes/')
  const data = await response.json()
  return data
}

export const getNote = async (id: number) => {
  if (typeof id == 'number') {
    const response = await fetch(`/v1/api/notes/${id}/`)
    const data = await response.json()
    return (data)
  }

}