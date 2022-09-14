import React from 'react'
import Item from '../Item/Item'

function ItemList({ productos }) {
  return (
    <div className='itemList'>
      {productos.map((product) => (
        <Item
        key={product.id}
          image={product.image} 
          title={product.title}
          price={product.price}
          />
      ))}
    </div>
  )
}

export default ItemList