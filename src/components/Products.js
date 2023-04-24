import React, { useEffect, useState } from 'react'
import { ProductList } from './ProductList'
import { getallProducts } from './services'

export const Products = () => {
    
   const[products,setProducts]=useState(null)
   const[isPending,setIsPending]=useState(true)
   const[error,setError]=useState(null)
   useEffect(()=>{
    getallProducts()
    .then(res=>{
        setProducts(res.data)
        setIsPending(false)
        setError(null)
    })
    .catch(err=>{
        setError(err.message)
        setIsPending(false)
    })


   },[])
  

  return (
    <div>
        {isPending && <div> loading...</div>}
        {error && <div>{error}</div>}
        {products && <ProductList products={products} title="all products" />}

    </div>
  )
}