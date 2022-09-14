import React from 'react';
import Title from '../Tittle/Tittle';
import BtnStock from '../ItemCount/BtnStock';
import data from "../mockData";
// import Item from '../Item/item'
import ItemList from '../ItemList/ItemList';

import { useEffect, useState } from 'react';
const ItemListContainer = () => {
  const [listaProductos, setProducList] = useState ([]);

  useEffect(() => {
    verProducto.then((response) => {
      setProducList(response);
    })
    .catch((error) => console.log(error));
  },);

  const verProducto = new Promise ((resolve, reject) => {
    setTimeout(()=> {
      resolve(data);
      reject("hubo un problema")
    }, 2000)
  });

  const onAdd = (Cantidad) => {
    console.log(`Agregaste ${Cantidad} productos al carrito`);
  }

  return (
    <>
    <div className='Carrito'>
    <Title gretting="- ARGIAOKK" />
    <BtnStock initial={1} stock={10} onAdd={onAdd} />

    <ItemList productos={listaProductos}/> 
    </div>
    </>
  );
}

export default ItemListContainer