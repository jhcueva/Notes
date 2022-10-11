import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { UserBtn } from '../components/UserBtn'

import { NotesInterface } from '../types'

import { getNote } from '../hooks/getNote'

import NoteBook from './diary.png'

import { ReactComponent as AttachIcon } from '../assets/attach-icon.svg'
import { ReactComponent as TrashIcon } from '../assets/trash-icon.svg'
import { ReactComponent as ImageIcon } from '../assets/image-icon.svg'

interface NoteProps {
  id: number | undefined;
  onDeleteNote: (id: number) => void
}

const expectedNote: NotesInterface = {
  id: 0,
  body: "",
  updated: new Date,
  created: new Date,
}

export const Note = ({ id, onDeleteNote }: NoteProps) => {

  const [note, setNote] = useState<NotesInterface>(expectedNote)

  const userMenu = useRef()

  const handleDelete = () => {
    onDeleteNote(id as number)
  }

  const handleMenuClick = () => {
    userMenu.current.classList.toggle('hidden')
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

      <section className='flex justify-end pb-3'>
        <UserBtn /> 
      </section>

      {
        typeof id == 'undefined'
          ?
          <div className='container grid h-full place-items-center'>
            <div>
              <p className='text-center text-4xl pb-10 font-semibold'>Select a note</p>
              <img className='Diary w-56 h-80' src={NoteBook} alt='Diary' />
            </div>
          </div>
          :
          <form action="">
            <section className='mb-4 w-full bg-gray-50 rounded-lg border border-gray-200'>
              <section className='buttons flex justify-between items-center py-2 px-3 border-b'>
                <section className='flex flex-wrap items-center divide-gray-200 sm:divide-x'>
                  <section className='flex items-center space-x-1'>
                    <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <AttachIcon />

                      <span className="sr-only">Attach file</span>
                    </button>
                    <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <ImageIcon />
                      <span className="sr-only">Upload image</span>
                    </button>
                  </section>
                </section>
                <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" onClick={handleDelete}>
                  <TrashIcon />
                  <span className="sr-only">Trash</span>
                </button>
              </section>
              <section className='py-2 px-4 bg-white rounded-b-lg'>
                <label htmlFor="editor" className="sr-only">Publish post</label>
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
