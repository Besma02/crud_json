import React,{useState} from 'react'

import { addProduct } from './services'
import { useNavigate} from 'react-router-dom'
import { FormControl, FormLabel,Input,VStack, Container, FormHelperText } from '@chakra-ui/react'

export const NewProducts = () => {
  
    const navigate=useNavigate()
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [productdetails, setProductdetails] = useState({
       
        name:'',
        price:'',
        like:'',
        quantity:'',
        description:'',

    })
    const {name,price,like,quantity,description}= productdetails
    const handleChange=(e)=>{

        setProductdetails({...productdetails,[e.target.name]:e.target.value})
    }
   
   
  
    const handleSubmit=async(e)=>{
        e.preventDefault()
     const productdetails={name,price,like,quantity,description}
      const res=validate(productdetails)
      setFormErrors(res)
      setIsSubmit(true)
      if(Object.keys(formErrors).length===0 && isSubmit){
        await addProduct(productdetails)
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
        <VStack as="form" onSubmit={handleSubmit} >
            <FormControl>
            <FormLabel>name:</FormLabel>
            <Input type='text' name="name" value={name} onChange={e=>handleChange(e)}/>
            <FormHelperText color='red'>{formErrors.name}</FormHelperText>
            </FormControl>

            <FormControl>
            <FormLabel>price:</FormLabel>
            <Input type='number' name="price" value={price} onChange={e=>handleChange(e)}/>
            <FormHelperText color='red'>{formErrors.price}</FormHelperText>
            </FormControl>
            <FormControl>
            <FormLabel>like:</FormLabel>
            <Input type='number' name="like" value={like} onChange={e=>handleChange(e)}/>
            <FormHelperText color='red'>{formErrors.like}</FormHelperText>
            </FormControl>
            <FormControl>
            <FormLabel>quantity:</FormLabel>
            <Input type='number' name="quantity" value={quantity} onChange={e=>handleChange(e)}/>
            <FormHelperText color='red'>{formErrors.quantity}</FormHelperText>
            </FormControl>
            <FormControl>
            <FormLabel>description:</FormLabel>
            <Input type='text' name="description" value={description} onChange={e=>handleChange(e)}/>
            <FormHelperText color='red'>{formErrors.desciption}</FormHelperText>
            </FormControl>
            <button style={{width:"130px", backgroundColor:"blue",borderRadius:"30px",padding:"10px"}}>add product</button>
        </VStack>
    </Container>
  )
}

