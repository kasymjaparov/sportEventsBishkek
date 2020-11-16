import React from 'react'
import 'materialize-css';
import './index.css'
import point from './point.js'
import InputEvent from './components/InputEvent/index'
import MainWrapper from './components/MainWrapper'
import TodoInput from './components/TodoInput/index'

function App() {
  const [loading, setLoading] = React.useState(true)
  const [failed, setFailed] = React.useState(false)
  const [todos, setTodos] = React.useState([])
  React.useEffect(() => {
    fetch(`${point}/list`)
      .then((response) => response.json())
      .then((json) =>{
        setLoading(false)
        setTodos(json)//usestate получает массив
      })
        .catch((err)=>{
          setLoading(false)
          setFailed(true)
        })},[])
  return (
    <div className="app">
      <MainWrapper>
      <h1 className='app_title'>Спортивные мероприятия</h1>
      <div className='app_row'>
      <InputEvent/>
      {todos.map((item) => (
         <TodoInput key={item.id} data={item}/>
        )).reverse()}
      {loading&&<div className="app_load">Загрузка...</div>}
      {failed&&<div className='api_card_error'>Не удалось получить список мероприятий !</div>}
      </div>
      
      </MainWrapper>
     
    </div>
  )
}

export default App;
