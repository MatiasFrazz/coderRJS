import React from 'react'

const Item = ({title, price, image}) => {
  return (
    <div>
        <img width={'300px'} src={image} alt={title}/>
        <h3>{title}</h3> 
        <h4>{price}</h4>
    </div>
  )
}

export default Item