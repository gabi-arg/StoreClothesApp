import { useReducer } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

const initialState = []

export const ShoppingCartProvider = ({children}) => {
  
  const buyReducer = (state = initialState, action = {})=>{
    switch(action.type){
      case '[CART] Add Purchase':
        return [...state, action.payload]
      case '[CART] Increase Quantity Buy':
       return state.map(item =>{
          const q = item.quantity + 1
          if(item.id === action.payload) return {...item, quantity:q} 
          return item
        })
      case '[CART] Decrease Quantity Buy':
         return state.map(item => {
          const q = item.quantity -1
          if(item.id === action.payload && item.quantity > 1) return {...item, quantity:q}
          return item
      }) 
      case '[CART] Delete Purchase':
        return state.filter(buy => buy.id !== action.payload)
      default:
        return state
    }
  }

  const [shoppingList, dispatch] = useReducer(buyReducer, initialState)
  
  
const addPurchase = (buy)=>{
  buy.quantity = 1
  const action = {
    type:'[CART] Add Purchase',
    payload:buy
  }  
  dispatch(action)
}

const increaseQuantity = (id)=>{
  const action = {
    type:'[CART] Increase Quantity Buy',
    payload:id
  }
  dispatch(action)
}

const decreaseQuantity =(id)=>{
  const action = {
    type:'[CART] Decrease Quantity Buy',
    payload:id
  }
  dispatch(action)
}

const deletePurchase =(id)=>{
  const action = {
    type:'[CART] Delete Purchase',
    payload:id
  }
  dispatch(action)
}


  
    return (
    
    <ShoppingCartContext.Provider value={{shoppingList, addPurchase, increaseQuantity,decreaseQuantity,deletePurchase}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
