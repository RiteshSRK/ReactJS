import React from 'react'

function Card({values, handleClick, cardindex}) {
  let {name, profession, image, friend} = values;
  return (
    <div className='bg-zinc-200 w-52 rounded-md overflow-hidden'>
      <div className='bg-sky-300 w-full h-32 rounded-md'>
        <img src={image} alt="Image" className='w-fll h-full object-cover' />
      </div>
      <div className='w-full p-'>
          <h4 className='text-xl font-semibold mx-1 '>{name}</h4>
          <h5 className='text-xs mx-1'>{profession}</h5>
          <button onClick={()=>handleClick(cardindex)} className={`bg-blue-600 rounded-lg px-2 text-white m-1 ${friend ? "bg-green-700" : "bg-blue-600"}`}>{friend ? "Friend" : "Add Friend"}</button>
        </div>
      
    </div>
  )
}

export default Card
