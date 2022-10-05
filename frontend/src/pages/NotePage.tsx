import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom"
import { NotesInterface } from '../types'


import { ReactComponent as BackIcon } from '../assets/back-icon.svg'
import { ReactComponent as DeleteIcon } from '../assets/trash-icon.svg'
import { ReactComponent as DoneIcon } from '../assets/check-icon.svg'


const Note: NotesInterface = {
  id: 0,
  body: "",
  updated: new Date,
  created: new Date,
}

export const NotePage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [note, setNote] = useState(Note)

  const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(note => ({ ...note, body:event.target.value}))
  }

  const handleKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  const handleClick = () => {
    if (id !== 'new' && note.body === '') {
      deleteNote()
    } else if (id !== 'new'){
      updateNote()
    } else if (id === 'new' && note.body !== null) {
      createNote()
    }
    navigate('/')
  }

  const deleteNote = async () => {
    fetch(`/api/notes/${id}/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    navigate('/')
  }

  useEffect(() => {
    getNote()
  }, [id])

  const getNote = async () => {
    if (id === 'new') return

    const response = await fetch(`/api/notes/${id}/`)
    const data = await response.json()
    console.log(data.body)
    setNote(data)
  }

  const createNote = async () => {
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  const updateNote = async () => {
    fetch(`/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  return (
    <div className='container h-screen mx-auto py-4'>
      <section className='notePage h-full flex flex-col px-3'>
        <section className='flex justify-between'>
          <BackIcon onClick={handleClick} className='w-6 h-6 cursor-pointer'/>
          {id !== 'new' 
            ? <DeleteIcon onClick={deleteNote} className='w-6 h-6 hover:text-[#D11A2A] transition-colors cursor-pointer'/>
            : <DoneIcon onClick={handleClick} className='w-6 h-6 cursor-pointer'/>
          } 
        </section>
        <textarea 
          className='w-full min-h-min max-h-5/6 h-auto my-3 p-4 outline-none border-none overflow-hidden rounded-md shadow'
          autoFocus
          defaultValue={note?.body}
          onChange={handleChange}
          onKeyDown={handleKey}
          >
        </textarea>

      </section>
    </div>
  )
}