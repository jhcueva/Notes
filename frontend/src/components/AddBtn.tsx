import React from 'react'
import { Link } from "react-router-dom"

import { ReactComponent as AddIcon } from '../assets/add-icon.svg' 

export const AddBtn = () => {
  return (
    <Link to="/note/new/">
      <AddIcon />
    </Link>
  )
}
