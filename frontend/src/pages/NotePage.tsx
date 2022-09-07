import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom"

import { ReactComponent as  BackIcon} from '../assets/back-icon.svg'
import { ReactComponent as DeleteIcon } from '../assets/delete-icon.svg'


export const NotePage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [note, setNote] = useState([])

  const handleChange = (event) => {
    setNote({
      ...note,
      'body': event.target.value
    })
  }

  const handleClick = () => {
    updateNote()
    navigate('/')
  }

  const deleteNote = async () => {
    fetch(`/api/notes/${id}/delete/`, {
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
    const response = await fetch(`/api/notes/${id}/`)
    const data = await response.json()
    console.log(data.body)
    setNote(data)
  }

  const updateNote = async () => {
    fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  return (
    <div className='my-4 mx-3'>
      <section className='flex justify-between'>
        <BackIcon onClick={handleClick} className='w-6 h-6 cursor-pointer'/>
        <DeleteIcon onClick={deleteNote} className='w-6 h-6 hover:text-[#D11A2A] transition-colors cursor-pointer'/>
      </section>
      <article className='flex items-center p-4 my-3 text-black-500 bg-white rounded-md shadow'>
        <textarea 
          className='w-full'
          defaultValue={note?.body}
          onChange={handleChange}
          >
        </textarea>
      </article>
    </div>
  )
}