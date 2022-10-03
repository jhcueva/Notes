import Pencil from './pencil.png'

export const NoNotes = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center lg:-translate-y-7'>
      <p className='pb-10 text-3xl font-bold text-center'>Write your first note</p>
      <img src={Pencil} className='h-80 w-20 translate-x-6' alt="Pencil" />
    </div>
  )
}
