import React, { useEffect, useState } from 'react'
import { ListItem } from '../components/ListItem'

export const NodesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNodes()
  }, [])

  const getNodes = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/notes/')
    const data = await response.json()
    console.log(data)
    setNotes(data)
  }

  return (
    <section className='nodeList'>
      {notes.map((note, index) => (
        <ListItem key={index} note={note} />
      ))}
    </section>
  )
}
