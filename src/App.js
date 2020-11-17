import React, { useEffect } from 'react';
import 'materialize-css';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from './redux/actions/index.js';
import './index.css'
import InputEvent from './components/InputEvent/index'
import MainWrapper from './components/MainWrapper'
import TodoInput from './components/TodoInput/index'


function App() {
  const state = useSelector((state)=>state.posts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  });
  
  return (
    <div className="app">
      <MainWrapper>
      <h1 className='app_title'>Спортивные мероприятия</h1>
      <div className='app_row'>
      <InputEvent/>
      {state.length===0&&<div className="app_loading">Загрузка...</div>}
      {state.map((item) => (
         <TodoInput key={item.id} data={item}/>
        )).reverse()}
      </div>
      </MainWrapper>
    </div>
  )
}

export default App;
