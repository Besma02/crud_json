import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, SimpleGrid,Button } from '@chakra-ui/react'
import { useParams,useNavigate } from 'react-router-dom'
import { getallProducts } from './services'
import { deleteProduct } from './services'

export const ProductDetails = () => {
    const navigate=useNavigate()
    const{id} =useParams()
    const[product,setProduct]=useState({})
    const[isPending,setIsPending]=useState(true)
    const[error,setError]=useState(null)
    useEffect(()=>{
     getallProducts(id)
     .then(res=>{
         setProduct(res.data)
         setIsPending(false)
         setError(null)
     })
     .catch(err=>{
         setError(err.message)
         setIsPending(false)
     })
 
    },[])
    const handleDelete=async(id)=>{
       
       await deleteProduct(product.id)
      navigate('/')
       
    }
  return (
    <div>
        {isPending && <div> loading...</div>}
        {error && <div>{error}</div>}
        {product && (
            <Card bg="white" p="10px" w="250px" mx="auto">
            <CardHeader>
            <h2>name:{product.name}</h2>
            </CardHeader>
            <CardBody>
            <p>price:{product.price}</p>
            <p>like:{product.like}</p>
            <p>quantity:{product.quantity}</p>
            <p>description:{product.description}</p>

            </CardBody>
            <CardFooter>
                <Button onClick={()=>handleDelete(product.id)}>delete</Button>
            </CardFooter>
        
            </Card>
        )}


    </div>
  )
}
