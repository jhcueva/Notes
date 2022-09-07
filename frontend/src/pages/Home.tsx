import React from 'react'
import { NotesList } from './NotesList'

export const Home = () => {
  return (
    <section className='container mx-auto h-screen grid place-items-center lg:grid-cols-12 lg:py-4'>
      <div className='notes w-full h-screen bg-slate-50 lg:rounded-l-md lg:col-span-3 lg:h-5/6'>
        <NotesList/>
      </div>
      <div className='notesDetail w-full h-screen bg-red-700 rounded-r-md hidden lg:col-span-9 lg:block lg:h-5/6'></div>

    </section>
  )
}
