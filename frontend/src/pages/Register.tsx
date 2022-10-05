import React, { useEffect, useState } from 'react'
import { FormInput } from '../components/FormInput'
import { CSRFToken } from '../components/CSRFToken'
import { register } from '../hooks/register'
import { useNavigate, Navigate } from "react-router-dom"


export const Register = () => {
  const navigate = useNavigate()
  const [formInput, setFormInput] = useState({})
  const [csrf, setCsrf] = useState('')
  const [error, setError] = useState([])

  useEffect(() => {
    console.log(csrf)
    if (csrf.length > 1) {
      try{
        register(formInput, csrf)
          .then(res => setError(Object.keys(res).map(key => res[key])))
          .then(() => {
            if (error[0] === 201) {
              <Navigate replace to="/login" />
              navigate("/")
            }
          })
      } catch (err) {
        console.log("Error: ", err)
      }
    }
    console.log("Form input: ",formInput)
  }, [formInput])


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
        { error.length >= 1 ?
          <p className='text-center'>{error}</p>
          : ""
        }
        <form 
          action="POST"
          onSubmit={handleSubmit}
          className='mb-6'
          >
          <CSRFToken />
          <FormInput name="email" placeholder='Email' label='Email' type='email'/>
          <FormInput name="username" placeholder='Username' label='Username' type='text'/>
          <FormInput name="first_name" placeholder='First Name' label='First Name' type='text'/>
          <FormInput name="last_name" placeholder='Last Name' label='Last Name' type='text' />
          <FormInput name="password" placeholder='Password' label='Password' type='password'/>
          <FormInput name="password_confirmation" placeholder='Confirm Password' label='Confirm Password' type='password' />
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
