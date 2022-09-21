import React from 'react'
import { Link } from "react-router-dom"

// import { ReactComponent as AddIcon } from '../assets/add-icon.svg' 

export const AddBtn = () => {
  return (
    <Link to="/note/new/" className='w-12 h-12 flex justify-center items-center absolute right-7 bottom-8 bg-slate-100 rounded-full hover:scale-105 transition-transform'>
      {/* <AddIcon className='w-9 h-9'/> */}
    </Link>
  )
}
