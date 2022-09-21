import {useState, useEffect} from 'react'
import { NoteInterface } from '../types'
import { Item } from './Item'
import { LinkItem } from './LinkItem'


export const ListItem = ({ note }:{note: NoteInterface}) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  
  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  return (
    <>
      { 
        !matches 
        ? <LinkItem note={note}/> 
        : <Item note={note}/> 
      }
    </>
  )
}
