import { useEffect, useState } from 'react'
import { NoteWeb } from '../components/NoteWeb'
import { NotesInterface } from '../types'
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
          <form action="">
            <section className='mb-4 w-full bg-gray-50 rounded-lg border border-gray-200'>
              <section className='buttons flex justify-between items-center py-2 px-3 border-b'>
                <section className='flex flex-wrap items-center divide-gray-200 sm:divide-x'>
                  <section className='flex items-center space-x-1'>
                    <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                  </section>
                </section>
                <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" onClick={handleDelete}>
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Trash</span>
                </button>
              </section>

              <section className='py-2 px-4 bg-white rounded-b-lg'>
                <label for="editor" class="sr-only">Publish post</label>
                <textarea
                  key={note.body}
                  autoFocus
                  aria-rowcount={8}
                  rows={8}
                  className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 outline-none border-none dark:text-white dark:placeholder-gray-400" 
                  placeholder="Write an article..."
                  defaultValue={note.body}
                >
                </textarea>
              </section>
            </section>
          </form>
      }
    </section>
  )
}
