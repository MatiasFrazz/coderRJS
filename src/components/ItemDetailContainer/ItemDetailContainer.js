import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'


const product = {id : 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEn1YZsmJqjsiT4YFQhQZNLMvbwPBH1oeyEg&usqp=CAU", tittle: 'Televisor 60" Pulgadas', price:2650}

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(()=>{
        const getData = new Promise (resolve =>{
            setTimeout(()=>{
                resolve(product);
            }, 3000);
        });
        getData.then(res=> setData(res));
    }, [])

  return (
    < ItemDetail data={data} />
  )
}

export default ItemDetailContainer