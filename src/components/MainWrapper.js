import React from 'react'
import '../index.css'

function App(props) {
  return (
    <div className="mainWrapper">
      {props.children}
    </div>
  )
}

export default App;
