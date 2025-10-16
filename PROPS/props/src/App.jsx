import React from 'react'
import Child from "./child"

const App = () => {
  let data = {name:"sai", age:22}
  return (
    <div>
      <Child prop={data}/>
    </div>
  )
}

export default App
