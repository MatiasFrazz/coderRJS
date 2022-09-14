import React from 'react'


const ItemDetail = ({data}) => {
  return (
    <div className='container'>
        <h3>Detalle del Producto</h3>
        <div className='itmDetail'>
            <img className='itmDetailImg' src={data.image} alt={data.tittle}/>
            <div>
                <h3 className='itmDetailTittle'>{data.tittle}</h3>
                    <h4>{data.price}</h4> 
            </div>
        </div>
    </div>
  )
}

export default ItemDetail