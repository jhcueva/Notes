import { Link } from "react-router-dom"
import { NoteInterface } from '../types'
import {getContent, getTime, getTitle} from '../hooks/getNote'

export const LinkItem = ({ note }:{note: NoteInterface}) => {
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
