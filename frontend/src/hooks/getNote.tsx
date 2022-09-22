export const getNotes = async () => {
  const response = await fetch('/api/notes/')
  const data = await response.json()
  return data
}

export const getNote = async (id) => {
  if (id === 'new') return

  const response = await fetch(`/api/notes/${id}/`)
  const data = await response.json()

  return (data)
}