import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import { ListItem } from '../components/ListItem'

export const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNodes()
  }, [])

  const getNodes = async () => {
    const response = await fetch('/api/notes/')
    const data = await response.json()
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
