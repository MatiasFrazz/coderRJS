import React from 'react';
import Title from '../Tittle/Tittle';
import data from "../mockData";
import ItemList from '../ItemList/ItemList';


import { useEffect, useState } from 'react';
const ItemListContainer = () => {
  const [listaProductos, setProducList] = useState ();

  useEffect(() => {
    verProducto.then((response) => {
      setProducList(response);
    })
    .catch((error) => console.log(error));
  }, );

  const verProducto = new Promise ((resolve, reject) => {
    setTimeout(()=> {
      resolve(data);
      reject("Hubo un Problema")
    }, 2000)
  });
  return (
    <>
    <div className='Carrito'>
    <Title gretting="- ARGIAOKK" />


    <ItemList productos={listaProductos}/> 
    </div>
    </>
  );
}

export default ItemListContainer