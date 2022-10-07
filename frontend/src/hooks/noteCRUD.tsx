export const deleteNote = async (id: number) => {
  if (typeof id == 'number'){
    const response = await fetch(`/v1/api/${id}/note/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const status = response.json()
    return status
  }
}