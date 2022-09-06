import React from 'react'
import { Link } from "react-router-dom"


export const ListItem = ({ note }) => {
  return (
    <section className='note'>
      <Link to={`/note/${note.id}`}>
        <p>{note.body}</p>
      </Link>
    </section>
  )
}
