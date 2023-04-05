import React from 'react'

import { ExampleComponent, Button } from 'cartui'
import 'cartui/dist/index.css'

const App = () => {
  return(
    <>
       <ExampleComponent text="Salam 😄" />
       <Button text="click" onClick={()=>alert("hello dana")}/>
    </>
  )
}

export default App
