import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  console.log(users)
  return (
    <div className='w-full max-h-72 overflow-auto p-2 flex justify-center gap-6 flex-wrap'>
      
      {/* {users.map((item, index) => {
        return <Card user={item} key={index} handleRemove={handleRemove} id={index} />
      })} */}
    </div>
  )
}

export default Cards
