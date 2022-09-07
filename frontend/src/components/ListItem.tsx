import React from 'react'
import { Link } from "react-router-dom"
import { NoteInterface } from '../types'

const getTitle = (note: NoteInterface) => {
  let title = note.body.split('\n')[0]
  if (title.length > 45) {
    return title.slice(0, 45)
  }

  return title
}

const getTime = (note: NoteInterface) => {
  return new Date(note.updated).toLocaleDateString()
}

const getContent = (note: NoteInterface) => {
  const title = getTitle(note)
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '');

  if (content.length > 45) {
    return content.slice(0, 45) + '...'
  } else {
    return content ;
  }
}


export const ListItem = ({ note }:{note: NoteInterface}) => {
  return (
    <section className='note flex items-center p-4 text-gray-500 bg-white rounded-md shadow'>
      <Link to={`/note/${note.id}`}>
        <p>{getTitle(note)}</p>
        <p>{getContent(note)}</p>
        <p>{getTime(note)}</p>
      </Link>
    </section>
  )
}
