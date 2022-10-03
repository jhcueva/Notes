import { useState, useEffect } from 'react'
import { Item } from './Item'
import { LinkItem } from './LinkItem'
import { getTitle, getContent, getTime } from '../hooks/getNoteInformation'

interface ListItemProps {
  id: number
  body: string
  updated: Date
  selectedNote: (id: number) => void
}

export const ListItem = ({ id, body, updated, selectedNote }: ListItemProps) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  const handleClick = () => {
    console.log("CLick")
    selectedNote(id)
  }

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <>
      <section className='note flex flex-col p-4 text-gray-500 bg-white rounded-md shadow' onClick={handleClick}>
        {
          !matches
            ? <LinkItem id={id} title={getTitle(body)} content={getContent(body)} date={getTime(updated)} />
            : <Item id={id} title={getTitle(body)} content={getContent(body)} date={getTime(updated)}/>
        }
      </section>
      {/* <section className='flex flex-col p-4 text-gray-500 bg-white rounded-md shadow animate-pulse'>
        <div className='h-3 rounded-full w-3/4 mb-3 bg-gray-200'></div>
        <div className='h-2.5 rounded-full max-w-[82px] bg-gray-200'></div>
      </section> */}
    </>
    
  )
}
