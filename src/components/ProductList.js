import { Card, CardBody, CardFooter, CardHeader, SimpleGrid,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { deleteProduct } from './services'


export const ProductList = ({products,title}) => {
 
      
        
     
  return (
    <div>
        <h1>{title}</h1>
        <SimpleGrid minChildWidth={250} gap="10px" bg='gray.50'm="10px">
        {products.map(product=>(
            <Card key={product.id} bg="white" p="10px" >
                <CardHeader>
                <h2>{product.name}</h2>
                </CardHeader>
                <CardBody>
                <p>{product.price}</p>
                <p>{product.like}</p>
                <p>{product.quantity}</p>
                <p>{product.description}</p>

                </CardBody>
                <CardFooter>
                <Link to={`/products/${product.id}`}><Button marginRight="5px">More</Button></Link>
                <Button onClick={()=>deleteProduct(product.id)} marginRight="5px">delete</Button>
                <Link to={`/update/${product.id}`}><Button >update</Button></Link>
                </CardFooter>
                
               
                </Card>

))}
        </SimpleGrid>
    </div>
  )
}
