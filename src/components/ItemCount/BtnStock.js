import React, {useState} from 'react'

const BtnStock = ({initial, stock ,onAdd}) => {

  let [count, setCount] = useState(initial);

  const restar = () => {
    setCount = (count - 1)
  }

  const sumar = () => {
    setCount = (count + 1)
  }

  return (
    <div className="btnStock">
      <button disabled={count <= 1} onClick={restar} >-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={sumar}>+</button>

      <div>
        <button className='btnCart' disabled= {stock <= 0 } onclick={()=> onAdd(count) }>Agregar al Carrito</button>
      </div>

    </div>
  )
}

export default BtnStock