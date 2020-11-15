import React from 'react'
import 'materialize-css';
import './index.css'
import InputEvent from './components/InputEvent/index'
function App() {
  return (
    <div className="app">
      <h1 className='app_title'>Спортивные мероприятия</h1>
      <InputEvent/>
    </div>
  )
}

export default App;
