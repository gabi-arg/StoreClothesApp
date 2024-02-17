import React, { useState } from 'react'

export const Card = ({image,title, price, handleAdd, handleDelete}) => {
 
    const [added, setAdded] = useState(false)
    const clickAdd = () =>{
        handleAdd()
        setAdded(true)
    }
    const clickDelete = () =>{
        handleDelete()
        setAdded(false)
    }
   

  return (
    <>
       
        <div className='card'>
            <img src={image} alt={title} className="card-image"/>
            <h3 className="card-title">{title}</h3>
            <p className="card-price">${price.toFixed(2)}</p>
            {
                added ? 
                    <button type='button' className="card-boton-quitar" onClick={clickDelete}>Quitar Carrito</button>
                :
                    <button type='button' className="card-boton-agregar" onClick={clickAdd}>Agregar al Carrito</button>
            }
        </div>
    </>
  )
}
