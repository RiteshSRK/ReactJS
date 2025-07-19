import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';

function Home() {
    const [product, setProduct] = useState([])

    const getProduct = () =>{
        const api = "/products";

        axios.get(api)
        .then( (product) => {
            // console.log(product);
            setProduct(product.data);
        }).catch( (err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getProduct();
    })

  return (
    <div className='w-1/2 m-auto'>
        <h1>Home</h1>

        <hr className='my-4 ' />

        <ul>
            {product.length > 0 ? product.map((p) => <li key={p.id} 
            className='p-2 my-2 bg-red-100 rounded'>{p.title}</li> ) : "Loading..."}
        </ul>
    </div>
  )
}

export default Home
