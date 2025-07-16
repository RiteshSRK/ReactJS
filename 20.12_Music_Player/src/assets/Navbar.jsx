import React from 'react'

function Navbar({data}) {
  return (
    <div className='bg-slate-700 p-2 flex justify-between items-center'>
      <h1 className='mx-10 font-bold text-orange-500 text-xl'>Orange</h1>
      <div className='flex gap-2 text-white font-semibold text-xs bg-orange-500 p-1.5 mx-12 px-3 rounded-md'>
        <h2 className=''>Favourites</h2>
        <p className='bg-orange-700 px-1.5 rounded-md items-center'>{data.filter( item => item.added).length}</p>
      </div>
    </div>
  )
}

export default Navbar;
