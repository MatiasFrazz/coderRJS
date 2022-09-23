import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

function ItemList({ productos }) {
  return (
    <div className='itemList'>
      {productos.map((data) => (
        <Link  
          key={data.id} to={'/detalle/' + data.id} 
          style={{textDecoration: "none" }}>
          <Item
            image={data.image} 
            title={data.title}
            price={data.price}
            category={data.category}
            />
          </Link>    
          ))}

    </div>
  )
}

export default ItemList