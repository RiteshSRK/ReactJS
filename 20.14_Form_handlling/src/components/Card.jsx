import React from 'react'

function Card({user, handleRemove, id}) {
  const {name, email, picture} = user;
  return (
    <>
      <div className='w-[180px] h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
          <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-300 overflow-hidden '>
            <img className='w-full h-full object-cover' src={picture} alt="Image" />
          </div>
            <h2 className='mt-1 text-lg font-semibold'>{name}</h2>
            <h3 className='text-xs text-center font-semibold p-1 opacity-60'>{email}</h3>
            <p className='text-xs text-center font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error vero ipsam!</p>
            
            <button onClick={()=>handleRemove(id)} className='px-4 py-[1px] mt-2 bg-red-600 rounded-md text-white'>Remove it</button>
      </div>
    </>
  )
}

export default Card
