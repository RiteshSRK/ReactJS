import React from 'react'

function Card({data, handleClick, cardIndex}) {

  const {image, name, artist, added} = data;

  return (
    <div className='w-52 bg-zinc-500 p-3 my-1.5 w-58 rounded-md flex gap-2 pb-6 relative '>
      <div className='bg-slate-300  w-28 h-20 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover ' src={image} alt="" />
      </div>
      <div className=''>
        <h2 className='px-1 text-white font-semibold text-sm'>{name}</h2>
        <p className='p-1 text-white text-xs'>{artist}</p>
      </div>
      <button onClick={()=>handleClick(cardIndex)} className={`${added ? "bg-cyan-500" : "bg-orange-500"} px-2 py-1  text-sm text-white rounded-full absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] whitespace-nowrap `}>{added === true ? "Added" : "Add to Favourites"}</button>
    </div>
  )
}

export default Card 
