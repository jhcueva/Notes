import { useEffect, useState } from 'react'
import {NotesInterface} from '../types'
import { ReactComponent as DeleteIcon } from '../assets/delete-icon.svg'

import {getNote} from '../hooks/getNote'

import NoteBook from './diary.png'

interface NoteProps {
  id: number | undefined;
  onDeleteNote: (id: number) => void
}

const expectedNote: NotesInterface ={
  id: 0,
  body: "",
  updated: new Date,
  created: new Date,
}

export const Note = ({ id, onDeleteNote }: NoteProps) => {
  
  const [note, setNote] = useState<NotesInterface>(expectedNote)

  const handleDelete = () => {
    onDeleteNote(id as number)
  }

  useEffect(() => {
    if (typeof id != 'undefined') {
      try {
        getNote(id)
          .then(setNote)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
    console.log("Note Id: ",id)
    console.log("Note Id: ", typeof id)
  }, [id])

  return (
    <section className='notePage h-full flex flex-col py-4 px-3'>
      {
        typeof id == 'undefined' 
        ? 
          <div className='container grid h-full place-items-center'>
            <div>
              <p className='text-center text-4xl pb-10 font-semibold'>Select a note</p>
              <img className='Diary w-56 h-80' src={NoteBook} alt='Diary'/>
            </div>
          </div>
        :
          <>
            <section className='flex justify-between'>
              {
                <DeleteIcon onClick={handleDelete} className={`w-6 h-6 hover:text-[#D11A2A] transition-colors cursor-pointer ${(typeof id == 'undefined') && 'hidden'} `}/>
              }
            </section>
            <textarea
              key={note.body}
              className={`w-full min-h-min max-h-5/6 h-auto my-3 p-4 outline-none border-none overflow-hidden rounded-md shadow ${(typeof id == 'undefined') && 'hidden'}`}
              defaultValue={ note.body }
            >
            </textarea>
          </>

      }
    </section>
  )
}
