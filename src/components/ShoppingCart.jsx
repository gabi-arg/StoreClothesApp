import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import { NavLink } from 'react-router-dom'


export const ShoppingCart = () => {
const {shoppingList,increaseQuantity,decreaseQuantity,deletePurchase} = useContext(ShoppingCartContext)

const total =()=>{
  return shoppingList.reduce((total,item) => total + item.price * item.quantity, 0).toFixed(2)
}

  return (
        <>
          <h4 className='carrito-titulo'>TU COMPRA</h4>
      
            { shoppingList.map(item =>(
                <div className='carrito-detalle' key={item.id}>
                  <img className='carrito-imagen' src={item.image}/>
                  <p className='carrito-producto'>{item.title}</p>
                  <div className='carrito-btn-container'>
                    <button className='carrito-btn' onClick={()=> decreaseQuantity(item.id)}>-</button>
                    <button className='carrito-btn-quantity'>{item.quantity}</button>
                    <button className='carrito-btn' onClick={()=> increaseQuantity(item.id)}>+</button>
                  </div>
                  <p className='carrito-producto'>${item.price}</p>
                  <button type='button' className='carrito-vaciar' onClick={()=>deletePurchase(item.id)}>X</button>
              </div>
              )
             
            )}
              
          <p className='carrito-total'>Total: $ {total()} </p>
          <button className='carrito-pagar'><NavLink to='/pago'>Pagar</NavLink></button>
        </>
  )
}

