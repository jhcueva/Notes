import { FormInputInterface} from '../types'

export const FormInput = (props: FormInputInterface) => {
  return (
    <div className='mb-6'>
    <label 
      htmlFor={props.type} 
      className='block mb-2 text-lg font-medium text-gray-900'
    >
      {props.label}
    </label>
    <input 
      type={props.type} 
      name={props.name}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      placeholder={props.placeholder}
      required
    />
  </div>
  )
}
