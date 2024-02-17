import React, { useContext } from 'react'

import { Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export const Navbar = () => {
  const {shoppingList} = useContext(ShoppingCartContext)
  return (
    <>
    <div className="navbar-contenedor">
            <h3 className="navbar-logo"><NavLink to='/home'>STORE</NavLink></h3>
            <div className="navbar-menu">
                {/*Carrito de Compras*/}
                <NavLink to='shoppingcart' >
                  <Badge badgeContent={shoppingList.length}>
                    <ShoppingBagIcon />
                  </Badge>
                </NavLink>
                
                
            </div>
        </div>

    </>
  )
}
