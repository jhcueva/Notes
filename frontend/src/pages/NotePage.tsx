import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"


export const NotePage = () => {

  const { id } = useParams()

  const [note, setNote] = useState([])

  useEffect(() => {
    getNote()
  }, [id])

  const getNote = async () => {
    const response = await fetch(`/api/notes/${id}/`)
    const data = await response.json()
    setNote(data)
  }

  return (
    <div>
      <h2>Notes - {id}</h2>
      <h3>{note?.body}</h3>
    </div>
  )
}
