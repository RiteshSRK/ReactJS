import React from 'react'

function HandlingEvents() {

    const data = [
        {name : 'Mahiya Ve', description : 'Lorem ipsum dolor sit amet consectetur'},
        {name : 'Fitoor', description : 'Tera fitoor jab se chadh gaya re'}
    ]

  return (
    <div className='w-full bg-zinc-300 flex items-center justify-center gap-4'>
      {data.map( (item, index) => (
        <div key={index} className='w-fit px-2 py-2 bg-zinc-100 rounded-md'>
            <div className='font-semibold text-lg'>{item.name}</div>
            <p className='text-xs mt-2'>{item.description}</p>
            <button onClick={()=>alert('chal raha hai')} className='mt-2 bg-blue-800 text-white px-2 py-1 rounded text-xs'>Download Now</button>
        </div>
      ))}
    </div>
  )
}

export default HandlingEvents
