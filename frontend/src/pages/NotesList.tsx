import React, { useEffect, useState } from 'react'

import { ListItem } from '../components/ListItem'
import { AddBtn } from '../components/AddBtn'


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
    <section className='nodeList flex flex-col gap-4 py-4 mx-3'>
      <h2 className='text-3xl font-medium'>Note List</h2>
      {notes.map((note, index) => (
        <ListItem key={index} note={note} />
      ))}
      <AddBtn />
    </section>
  )
}
