import React from 'react'

const child = ({props}) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  )
}

export default child
