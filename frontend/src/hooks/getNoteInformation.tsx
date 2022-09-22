export const getTitle = (body: string) => {
  let title = body.split('\n')[0]
  if (title.length > 45) {
    return title.slice(0, 45)
  }
  return title
}

export const getTime = (time: Date) => {
  return new Date(time).toLocaleDateString()
}

export const getContent = (body: string) => {
  const title = getTitle(body)
  let content = body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '');

  if (content.length > 45) {
    return content.slice(0, 45) + '...'
  } else {
    return content ;
  }
}