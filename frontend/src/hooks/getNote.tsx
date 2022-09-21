import { NoteInterface } from '../types'

export const getTitle = (note: NoteInterface) => {
  let title = note.body.split('\n')[0]
  if (title.length > 45) {
    return title.slice(0, 45)
  }

  return title
}

export const getTime = (note: NoteInterface) => {
  return new Date(note.updated).toLocaleDateString()
}

export const getContent = (note: NoteInterface) => {
  const title = getTitle(note)
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '');

  if (content.length > 45) {
    return content.slice(0, 45) + '...'
  } else {
    return content ;
  }
}