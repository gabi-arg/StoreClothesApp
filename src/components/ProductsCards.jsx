import React, { useContext } from 'react'
import { Card } from './Card'
import { ProductsContext } from '../context/ProductsContext'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

export const ProductsCards = () => {
const { products } = useContext(ProductsContext)
const {addPurchase,deletePurchase} = useContext(ShoppingCartContext)

const handleAdd =(buy)=>{
  addPurchase(buy)
}

const handleDelete =(id)=>{
  deletePurchase(id)
}

return (
    <>
   
     <section className='card-container'>
      {products.map(product =>(
        <Card key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              handleAdd={()=>handleAdd(product)}
              handleDelete={()=>handleDelete(product.id)}
            >
            </Card>
        
        ))
      }
     </section>
     
    </>
  )
}
