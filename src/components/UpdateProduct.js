import { Container, FormControl, FormHelperText, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProduct,getallProducts } from './services'

export const UpdateProduct = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const[formErrors,setFormErrors]=useState({})
  const[isSubmit,setIsSubmit]=useState(false)
  const[productDetails,setProductDetails]=useState({
    id,
    name:'',
    price:'',
    like:'',
    quantity:'',
    description:'',

  })
  const{name,price,like,quantity,description}=productDetails
  const handlechange=(e=>{
    setProductDetails({...productDetails,[e.target.name]:[e.target.value]})

  })
  useEffect(()=>{
    getallProducts(id)
    .then(res=>{
        setProductDetails(res.data)
       
    })
    .catch(err=>{
        console.log(err.message)
        
    })

   },[])

   const handleSubmit=async(e)=>{
    e.preventDefault()
 const productdetails={name,price,like,quantity,description}
  const res=validate(productdetails)
  setFormErrors(res)
  setIsSubmit(true)
  if(Object.keys(formErrors).length===0 && isSubmit){
    await editProduct(id,productdetails)
    navigate('/')
    
  }
  
     }
 const validate=(values)=>{
  const error={}
  if(!values.name){
      error.name="name musn't be empty"
  }
  if(!values.price){
      error.price="price musn't be empty"
  }else if( values.price <=0){
    error.price="values.price should be>0"

  }

  if(!values.quantity){
      error.quantity="quantity musn't be empty"
  }else if( values.price <=0){
    error.quantity="values.quantity should be>0"

  }
  if(!values.description){
      error.description="desciption musn't be empty"
  }
  return error

}     
  return (
    <Container>
      <VStack as="form" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>name:</FormLabel>
          <Input type="text" name="name" value={name} onChange={e=>handlechange(e)}/>
          <FormHelperText color='red'>{formErrors.name}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>price:</FormLabel>
          <Input type="text" name="price" value={price} onChange={e=>handlechange(e)}/>
          <FormHelperText color='red'>{formErrors.price}</FormHelperText>
        </FormControl>
        <FormControl>
        <FormLabel>like:</FormLabel>
          <Input type="text" name="like" value={like} onChange={e=>handlechange(e)}/>
          <FormHelperText color='red'>{formErrors.like}</FormHelperText>
        </FormControl>
         <FormControl>
        <FormLabel>quantity:</FormLabel>
          <Input type="text" name="quantity" value={quantity} onChange={e=>handlechange(e)}/>
          <FormHelperText color='red'>{formErrors.quantity}</FormHelperText>
        </FormControl>
        <FormControl>
        <FormLabel>description:</FormLabel>
          <Input type="text" name="description" value={description} onChange={e=>handlechange(e)}/>
          <FormHelperText color='red'>{formErrors.description}</FormHelperText>
        </FormControl>
        <button>Update Product</button>

      </VStack>

    </Container>
  )
}
