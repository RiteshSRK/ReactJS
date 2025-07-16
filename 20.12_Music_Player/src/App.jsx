import React, { useState } from 'react'
import Navbar from './assets/Navbar'
import Card from './assets/Card'

function App() {

    const data = [
      {image: "https://images.unsplash.com/photo-1729682459691-e18931cf9893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Vilayati Sharab", artist: "Darshan", added: false},
      {image: "https://plus.unsplash.com/premium_photo-1728417202003-d746a7fded79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D", name: "No Compitition", artist: "Jass manak", added: false},
      {image: "https://images.unsplash.com/photo-1729731322907-bad37dff2443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D", name: "One Bottle Down", artist: "Honey Singh", added: false},
      {image: "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTF8fHxlbnwwfHx8fHw%3D", name: "Pahli Dafa", artist: "Atish Aslam", added: true},
    ]

    let [songData, setSongData] = useState(data);
    
    const handleClick = (cardIndex) => {
      setSongData( (pre) => (
        pre.map( (item,index) => {
          if(index === cardIndex){
            return {...item, added: !item.added}
          }
          return item;
        })
      ))
    }
    

    return (
      <>
        <Navbar data={songData}/>
        <div className='px-12 pt-2 flex gap-3 flex-wrap'>
          {songData.map((obj, cardIndex)=> (
            <Card data={obj} key={cardIndex} handleClick={handleClick} cardIndex={cardIndex} />
          ))}
          
        </div>
      </>
    )
  }

export default App
