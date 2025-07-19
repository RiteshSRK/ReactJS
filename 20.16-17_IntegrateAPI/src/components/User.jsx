import React, { useEffect, useState } from 'react'

function User() {
    const [first, setFirst] = useState("This is normal data")
    const [second, setSecond] = useState("This is very large data")

    useEffect(() => {
        console.log("User component is created");

        return () => {
            console.log("User component is Deleted!")
        }
    },[second])


  return (
    <div className='w-1/2 m-auto my-4'>
        <h1>{first}</h1>
        <button onClick={()=>setFirst("Normal data has been changed")} className='mt-1 p-2 bg-zinc-600 rounded-md text-white'>Change normal data</button><br /><br />


        <h1>{second}</h1>
        <button onClick={()=>setSecond("Large data has been changed")} className='mt-1 p-2 bg-zinc-600 rounded-md text-white'>Change large data</button>
    </div>
  )
}

export default User
