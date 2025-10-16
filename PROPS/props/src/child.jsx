import React from 'react'

const child = ({prop}) => {
  return (
    <div>
      <h1>{prop.name}</h1>
      <h3>{prop.age}</h3>
    </div>
  )
}

export default child
