import React, { useEffect } from 'react';
import 'materialize-css';
import { useDispatch,useSelector } from 'react-redux';
import {getTodos} from './redux/actions/index'
import './index.css'
import InputEvent from './components/InputEvent/index'
import MainWrapper from './components/MainWrapper'
import TodoInput from './components/TodoInput/index'

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state.todo.data)
  const loading = useSelector(state=>state.todo.get.loading)
  const error = useSelector(state=>state.todo.get.error)
 useEffect(()=>{
dispatch(getTodos())
 },[getTodos])
  return (
    <div className="app">
      <MainWrapper>
      <h1 className='app_title'>Спортивные мероприятия</h1>
      <div className='app_row'>
      <InputEvent/>
      {loading&&<div className="app_loading">Загрузка...</div>}
      {error&&<div className="app_loading">Ошибка</div>}
        {!state.length ? <div className="app_loading">Мероприятий пока нет</div>:
        state.map((item) => (
          <TodoInput key={item.id} data={item}/>
         )).reverse()
        }
      </div>
      </MainWrapper>
    </div>
  )
}

export default App;
