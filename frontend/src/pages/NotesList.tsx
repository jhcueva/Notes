import { AddBtn } from '../components/AddBtn'
import {NotesInterface} from '../types'

interface NoteListProps {
  notes: NotesInterface[]
  children?: (note) => JSX.Element
}

export const NotesList = (props: NoteListProps) => {
  return (
    <section className='nodeList relative h-full flex flex-col gap-4 py-4 px-3 bg-slate-50'>
      <h2 className='text-3xl font-medium'>Note List</h2>
      {props.notes.map(props.children)}
      <AddBtn />
    </section>
  )
}
