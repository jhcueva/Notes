import { Link } from "react-router-dom"
import {NoteInterface} from '../types'


export const LinkItem = ({ id, title, content, date }: NoteInterface) => {
  return (
    <>
      <Link to={`/note/${id}`}>
        <p>{title}</p>
        <p>{content}</p>
        <p>{date}</p>
      </Link>
    </>
  )
}
