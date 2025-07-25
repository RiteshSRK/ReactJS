import { useForm } from 'react-hook-form'

function Form_hook() {
    const {register, handleSubmit} = useForm();

  return (
    <form className='p-4' onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('name')} type="text" placeholder='Name' className='border-2 m-2' />
      <input {...register('email')} type="text" placeholder='Email' className='border-2 m-2' />
      <input type="submit" className='bg-zinc-600 p-1.5 rounded-md text-white text-xs' />
    </form>
  )
}

export default Form_hook