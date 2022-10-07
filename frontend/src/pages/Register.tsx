import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

import { FormInput } from '../components/FormInput'
import { CSRFToken } from '../components/CSRFToken'
import { useSignUp } from '../hooks/useSignUp'

interface ErrorInterface {
  email?: string;
  username?: string;
  password?: string;
  non_field_errors?: string;
}

const responseError: ErrorInterface = {
  email: "",
  username: "",
  password: "",
  non_field_errors: "",
}

export const Register = () => {
  const navigate = useNavigate()
  const [formInput, setFormInput] = useState({})
  const [csrf, setCsrf] = useState('')
  const [error, setError] = useState(responseError)

  useEffect(() => {
    if (csrf.length > 1) {
      try {
        useSignUp(formInput, csrf)
          .then((response) => { setError(response) })
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }, [formInput])

  useEffect(() => {
    console.log("Errors: ", error)
    if (error === 201) {
      navigate('/login')
    }
  }, [error])


  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const formInputs = Object.fromEntries(data.entries())
    const csrfToken = formInputs['csrfmiddlewaretoken']
    delete formInputs['csrfmiddlewaretoken']
    setFormInput(formInputs)
    setCsrf(csrfToken as string)
  }

  return (
    <section className='container h-screen mx-auto grid place-content-center'>
      <section className='bg-slate-100 p-5 rounded-md'>
        <form
          action="POST"
          onSubmit={handleSubmit}
          className='mb-6'
        >
          <CSRFToken />
          <FormInput name="email" placeholder='Email' type='email' error={error['email']} />
          {/* <FormInput name="username" placeholder='Username' type='text' error={error['username']} /> */}
          <FormInput name="password" placeholder='Password' type='password' error={error['password']} />
          <FormInput name="password_confirmation" placeholder='Confirm Password' type='password' error={error['non_field_errors']} />
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'>
            Register
          </button>
        </form>
      </section>
    </section>
  )
}
