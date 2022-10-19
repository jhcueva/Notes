import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { FormInput } from '../components/FormInput'
import { CSRFToken } from '../components/CSRFToken'

import { useLogin } from '../hooks/useLogin'
import { getJWT } from '../hooks/getJWT'

import { setAuthentication } from '../actions/index'

interface ErrorInterface {
  non_field_errors?: string;
}

const responseError: ErrorInterface = {
  non_field_errors: "",
}

export const Login = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [formInput, setFormInput] = useState({})
  const [csrf, setCsrf] = useState('')
  const [error, setError] = useState(responseError)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const formInputs = Object.fromEntries(data.entries())
    const csrfToken = formInputs['csrfmiddlewaretoken']
    delete formInputs['csrfmiddlewaretoken']
    setFormInput(formInputs)
    setCsrf(csrfToken as string)
  }

  useEffect(() => {
    if (csrf.length > 1) {
      try {
        useLogin(formInput, csrf)
          .then((response) => { setError(response) })
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }, [formInput])

  useEffect(() => {
    if (error === 201) {
      getJWT(formInput)
      dispatch(setAuthentication(true))
      navigate('/')
    }
  }, [error])

  return (
    <section className='container h-screen mx-auto grid place-content-center'>
      <section className='bg-slate-100 p-5 rounded-md'>
        <p className={`text-center rounded bg-red-300 text-red-700 mb-3 p-2 ${error['non_field_errors']?.length === 0 && 'hidden'}`}>{error['non_field_errors']}</p>
        <form
          action="POST"
          onSubmit={handleSubmit}
          className='mb-6'
        >
          <CSRFToken />
          <FormInput name='email' placeholder='Email' type='email' />
          <FormInput name='password' placeholder='Password' type='password' />
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'>
            Login
          </button>
        </form>
        <hr className='mb-4'></hr>
        <p className='text-center'>Doesn't have an account yet?</p>
        <Link to='/register'>
          <p className='font-medium text-blue-600 text-center'>Create an account</p>
        </Link>

      </section>
    </section>
  )
}
