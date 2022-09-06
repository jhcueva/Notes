import React from 'react'

export const ListItem = ({ note }) => {
  return (
    <section className='note'>
      <p>{note.body}</p>
    </section>
  )
}
