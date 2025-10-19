import React, {useState} from 'react'
import Child from "./child"

const App = () => {
  let[text, setText] = useState(true)
  function handleClick() {
    setText(!text)
  }
  let data = {
    name:"sai",
    age:22
  }
  return (
    <div>
        <button onClick={handleClick}>
          {text ? "SHOW":"HIDE"}
        </button>
        <div>
          {text && <Child props={data}/>}
        </div>
    </div>
  )
}

export default App
