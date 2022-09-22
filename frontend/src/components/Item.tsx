import {NoteInterface} from '../types'

export const Item = ({ id, title, content, date }: NoteInterface) => {
  return (
    <>
      <p>{title}</p>
      <p>{content}</p>
      <p>{date}</p>
    </>
  )
}
