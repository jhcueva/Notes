import { useEffect, useState } from 'react'
import { getCSRF } from '../hooks/getCSRF'

export const CSRFToken = () => {
  const [CSRFToken, setCSRFToken] = useState('')

  const getCookie = (name: string) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  useEffect(() => {
    try {
      getCSRF()
        .then(setCSRFToken(getCookie('csrftoken')))
    } catch (err) {
      console.log("Error: ", err)
    }
  }, [])

  return (
    <input type='hidden' name='csrfmiddlewaretoken' defaultValue={CSRFToken}/>
  )
}
