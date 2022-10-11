import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { NotesList } from './NotesList'
import { Note } from './Note'
import { getNotes } from '../hooks/getNote'
import { ListItem } from '../components/ListItem'
import { deleteNote } from '../hooks/noteCRUD'
import { NotesInterface } from '../types'


export const Home = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated)

  console.log(isAuthenticated)


  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState<number>()
  const [ondeleteNote, setOnDeleteNote] = useState<number>()
  const [reload, setReload] = useState(false)

  const handleSelectedNote = (id: number) => {
    setSelectedNote(id)
  }

  const handleDelete = (id: number) => {
    setOnDeleteNote(id)
    setSelectedNote(undefined)
  }

  useEffect(() => {
    try {
      deleteNote(ondeleteNote as number)
        .then(() => setReload(prevState => !prevState))
    } catch (err) {
      console.log("Error: ", err)
    }
  }, [ondeleteNote])

  useEffect(() => {
    console.log(reload)
    try {
      getNotes()
        .then(setNotes)
    } catch (err) {
      console.log("Error: ", err)
    }
  }, [reload])

  return (
    <section className='container mx-auto h-screen grid place-items-center lg:grid-cols-12 lg:py-4'>
      <div className='notes w-full h-screen bg-slate-50 lg:rounded-l-md lg:col-span-3 lg:h-5/6'>
        <NotesList
          notes={notes}
        >
          {note => (
            <ListItem
              key={note.id}
              body={note.body}
              updated={note.updated}
              id={note.id}
              selectedNote={(id) => handleSelectedNote(id)}
            />
          )}
        </NotesList>
      </div>
      <div className='notesDetail w-full h-screen bg-slate-100 rounded-r-md hidden lg:col-span-9 lg:block lg:h-5/6'>
        <Note
          id={selectedNote}
          onDeleteNote={(id) => handleDelete(id)}
        />
      </div>

    </section>
  )
}
