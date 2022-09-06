import React from 'react'
import Title from '../Tittle/Tittle'
import BtnStock from '../ItemCount/BtnStock'

const ItemListContainer = () => {

  const onAdd = (Cantidad) => {
    console.log(`Agregaste ${Cantidad} productos al carrito`);
  }

  return (
    <>
    <div className='Carrito'>
    <Title gretting="- ARGIAOKK" />
    <BtnStock initial={1} stock={10} onAdd={onAdd} />
    </div>
    </>
  );
}

export default ItemListContainer