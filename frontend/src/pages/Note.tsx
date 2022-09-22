import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {NotesInterface} from '../types'
import { ReactComponent as DeleteIcon } from '../assets/delete-icon.svg'

import {getNote} from '../hooks/getNote'
import {deleteNote} from '../hooks/noteCRUD'
import {getContent} from '../hooks/getNoteInformation'

interface NoteProps {
  id: number;
  onDeleteNote: (id: number) => number
}

const expectedNote: NotesInterface ={
  id: -1,
  body: "",
  updated: new Date,
  created: new Date,
}

export const Note = ({ id, onDeleteNote }: NoteProps) => {
  
  const [note, setNote] = useState<NotesInterface>(expectedNote)

  const handleDelete = () => {
    onDeleteNote(id)
  }

  useEffect(() => {
    if (id != -1) {
      try {
        getNote(id)
          .then(setNote)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }, [id])

  return (
    <section className='notePage h-full flex flex-col py-4 px-3'>
      <section className='flex justify-between'>
        {
          <DeleteIcon onClick={handleDelete} className='w-6 h-6 hover:text-[#D11A2A] transition-colors cursor-pointer'/>
        }
      </section>
      <textarea
        className='w-full min-h-min max-h-5/6 h-auto my-3 p-4 outline-none border-none overflow-hidden rounded-md shadow'
        defaultValue={ note?.body }
      >
      </textarea>
    </section>
  )
}
