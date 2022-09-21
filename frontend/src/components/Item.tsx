import { NoteInterface } from '../types'
import {getContent, getTime, getTitle} from '../hooks/getNote'

export const Item = ({ note }:{note: NoteInterface}) => {
  return (
    <section className='note flex flex-col p-4 text-gray-500 bg-white rounded-md shadow'>
        <p>{getTitle(note)}</p>
        <p>{getContent(note)}</p>
        <p>{getTime(note)}</p>
    </section>
  )
}
