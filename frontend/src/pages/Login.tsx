import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <section className='container h-screen mx-auto grid place-content-center'>
      <section className='bg-slate-100 p-5 rounded-md'>
        <form 
          action="POST"
          className='mb-6'
          >
          <div className='mb-6'>
            <label 
              htmlFor="email" 
              className='block mb-2 text-lg font-medium text-gray-900'
            >
              Email
            </label>
            <input 
              type="email" 
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Email'
              required
            />
          </div>
          <div className='mb-6'>
            <label 
              htmlFor="password" 
              className='block mb-2 text-lg font-medium text-gray-900'
            >
              Password
            </label>
            <input 
              type="password" 
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Password'
              required
            />
          </div>
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
