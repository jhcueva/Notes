import React from 'react'
import { Link } from "react-router-dom"


export const ListItem = ({ note }) => {
  return (
    <section className='note flex items-center p-4 text-gray-500 bg-white rounded-md shadow'>
      <Link to={`/note/${note.id}`}>
        <p>{note.body}</p>
      </Link>
    </section>
  )
}
