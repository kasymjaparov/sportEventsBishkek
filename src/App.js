import React, { useEffect } from 'react';
import 'materialize-css';
import { useDispatch,useSelector } from 'react-redux';
import { getTodos, deleteTodo } from './redux/actions/index'
import './index.css'
import InputEvent from './components/InputEvent/index'
import MainWrapper from './components/MainWrapper'
import TodoInput from './components/TodoInput/index'

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state.todo.data)
  const loading = useSelector(state=>state.todo.get.loading)
  const failed = useSelector(state=>state.todo.get.failed)
 useEffect(()=>{
dispatch(getTodos())
state.forEach(item=>{
  if(new Date(item.date).getTime()<new Date().getTime()){
    return dispatch(deleteTodo(item.id));
  }
})
 },[getTodos])
  return (
    <div className="app">
      <MainWrapper>
      <h1 className='app_title'>Спортивные мероприятия</h1>
      <div className='app_row'>
      <InputEvent/>
      {loading&&<div className="app_loading">Загрузка...</div>}
      {failed&&<div className="app_loading">Ошибка</div>}
        {
        state.map((item) => (
          <TodoInput key={item.id} data={item}/>
         )).reverse()
        }
      </div>
      </MainWrapper>
    </div>
  )
}

export default App
