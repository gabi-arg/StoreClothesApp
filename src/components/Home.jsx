import React from 'react'
import {  NavLink } from 'react-router-dom'
import  back1  from '../../img/feac3861e1e6e563196866c5886281a1.jpg'


export const Home = () => {

 
  return (
  <>
    <div  className='principal-contenedor'>
      <div className='principal-contenedor-one'>
        <div className='principal-text'>
          <h1> STORE </h1>
          <button className='principal-boton'><NavLink to='/productscards' >Comprar</NavLink></button>
        </div>
        <div className='principal-background'>
          <img  src={back1}  className='principal-img'/>
          <span className='back01'></span>
          <span className='back02'></span>

         {/*  <img  src={back2}  className='principal-img'/>
          
          <img  src={back3}  className='principal-img'/> */}
         
        
        </div>
      </div>
    </div>
  </>
  )
}
