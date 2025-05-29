import React from 'react'

const Productcard = ({item}) => {
  return (
    <div className='product-card'>
        <img src={item.images} alt=''/>
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <span>${item.price}</span>
    </div>
  )
}

export default Productcard;
