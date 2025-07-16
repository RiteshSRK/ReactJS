import React, { useState } from 'react'
import Card from './Card'


function CardTab() {

  let data = [
    {name: "Aman", profession: "Artist", image: 'https://images.unsplash.com/photo-1650783756107-739513b38177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friend: true},
    {name: "John", profession: "Programmer", image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friend: false},
    {name: "Smith", profession: "Web Designer", image: 'https://plus.unsplash.com/premium_photo-1683134146828-af5c1a0d2953?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friend: false},
    {name: "Jonathon", profession: "SoftWare Engineer", image: 'https://plus.unsplash.com/premium_photo-1682089877310-b2308b0dc719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friend: false},
  ]

  let [realData, setRealData] = useState(data);
  function handleFriendButton(cardIndex){
    setRealData((previus) => {
      return previus.map((item, index) => {
        if(index === cardIndex){
          return {...item, friend: !item.friend}
        }
        return item;
      })
    })
  }


  return (
    <div className='flex justify-center items-center gap-10 h-screen w-full bg-zinc-300'>
      {realData.map( (item, index) => (
        <Card key={index} cardindex={index} handleClick={handleFriendButton} values={item} />
      ))} 
      
    </div>
  )
}

export default CardTab;
