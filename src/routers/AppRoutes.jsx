import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { ProductsCards } from '../components/ProductsCards'
import { ShoppingCart } from '../components/ShoppingCart'
import { ProductsProvider } from '../context/ProductsProvider'
import { ShoppingCartProvider } from '../context/ShoppingCartProvider'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import FormularioPago from '../components/FormularioPago'

export const AppRoutes = () => {
  return (
  
    <ProductsProvider>
      <ShoppingCartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/productscards' element={<ProductsCards/>}/>
          <Route path='/shoppingcart' element={<ShoppingCart/>}/>
          <Route path='/pago' element={<FormularioPago/>}/>

        </Routes>
        <Footer/>
      </ShoppingCartProvider>
    </ProductsProvider>
      
    
  )
}
