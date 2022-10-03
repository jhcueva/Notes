import { AddBtn } from '../components/AddBtn'
import { NotesInterface } from '../types'
import { NoNotes } from '../components/NoNotes/NoNotes'

interface NoteListProps {
  notes: NotesInterface[]
  children: (note: NotesInterface) => JSX.Element
}

export const NotesList = (props: NoteListProps) => {
  console.log(props.notes)
  return (
    <section className='nodeList relative h-full flex flex-col gap-4 py-4 px-3 bg-slate-50 '>
      <h2 className='text-3xl font-medium'>Note List</h2>
      <section className='Notes h-full flex flex-col gap-4 py-4 overflow-y-hidden overflow-y-scroll scrollbar-hide'>
        {
          props.notes.length === 0 
          ? < NoNotes />
          : props.notes.map(props.children)
        }
      </section>
      <AddBtn />
    </section>
  )
}
