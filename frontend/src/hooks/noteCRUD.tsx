export const deleteNote = async (id: number) => {
  if (typeof id == 'number'){
    const response = await fetch(`/api/notes/${id}/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const status = response.json()
    return status
  }
}