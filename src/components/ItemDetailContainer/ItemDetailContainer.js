import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import productsList from "../mockData";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const {id} = useParams()

  const getData = new Promise (resolve =>{

    setTimeout(()=>{
        resolve(productsList);
    }, 20000);
}, []);


  useEffect(()=>{
      getData.then(res=> {
        const productoBuscado = res.find(p => p.id === id)
        setData(productoBuscado) 
      });
  },);



return (
  <div>
  < ItemDetail data={data} />
  </div>
  )
}

export default ItemDetailContainer