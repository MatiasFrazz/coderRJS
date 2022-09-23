import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import BtnStock from '../ItemCount/BtnStock';
import { useCartContext } from '../../CartContext';



const ItemDetail = ({data}) => {
  const [irAlCarrito, verElCarrito] = useState(false)
  const {agregarProducto} = useCartContext();

  const onAdd = (quantity) => {
    verElCarrito(true);
    agregarProducto(data, quantity)
  }
  return (
    <div className='container'>
        <h3>Detalle del Producto</h3>
        <div className='itmDetail'>
            <img className='itmDetailImg' src={data.image} alt={data.tittle}/>
            <div>
                <h3 className='itmDetailTittle'>{data.tittle}</h3>
                    <h4>{data.price}</h4> 
                    {
                      irAlCarrito
                      ? <Link to={"/cart"}>
                        Completar Compra
                      </Link>
                      : <BtnStock initial={1} stock={10} onAdd={onAdd}/>
                    }
            

            </div>
        </div>
    </div>
  )
}

export default ItemDetail