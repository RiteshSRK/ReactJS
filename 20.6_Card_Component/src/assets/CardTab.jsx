import React from 'react'

function CardTab() {

    const data = [
        {image : 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', Name : "Amazon basics", Description : "Contition Rendering Example Contition Rendering Example", inStock : true,},
        {image : 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', Name : "Daily objects", Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit", inStock : false,},
        {image : 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', Name : "Apple", Description : "atque nemo maxime quas nulla. Quo, minus.", inStock : false,}
        
    ]

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-300'>
        {data.map( (elem, index) => (
            <div key={index} className='bg-zinc-100 w-52 h-fit rounded-md overflow-hidden'>
                <div className='w-full h-32 bg-zinc-300 rounded-md'>
                    <img className='w-full h-full object-cover' src={elem.image} alt="" />
                </div>
                <div className='w-full px-3 py-4  '>
                        <h2 className='font-semibold'>{elem.Name}</h2>
                        <p className='text-xs mt-2'>{elem.Description}</p>
                        <button className={`px-4 py-2 text-xs ${elem.inStock ? "bg-blue-600" : "bg-red-600"} rounded text-white mt-3`}>{elem.inStock ? "In Stock" : "Out Of Stock"}</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CardTab
