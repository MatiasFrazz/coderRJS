import React from 'react'
import Title from '../Tittle/Tittle'
import BtnStock from '../ItemCount/BtnStock'

const ItemListContainer = () => {
  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} productos al carrito`);
  }

  return (
    <>
    <Title gretting="- ARGIAOKK" />
    <BtnStock initial={1} stock={10} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer