import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {
  const {register, handleSubmit, reset} = useForm()

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }
  
  return (
    <div className='mt-10 flex justify-center gap-2'>
      <form className='flex gap-5' onSubmit={handleSubmit(handleFormSubmit)}>

        <input {...register('name')} className='px-2 py-1 rounded-md text-semibold outline-none' type="text" placeholder='Name' />

        <input {...register('email')} className='px-2 py-1 rounded-md text-semibold outline-none' type="text" placeholder='Email' />

        <input {...register('picture')} className='px-2 py-1 rounded-md text-semibold outline-none' type="text" placeholder='Image URL' />

        <input  className='px-3 py-1 rounded-md bg-blue-800 text-white' type="submit" />
    </form>
    </div>
  )
}

export default Form
