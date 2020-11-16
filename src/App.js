import React, { useEffect } from 'react';
import 'materialize-css';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from './redux/actions/index.js';
import './index.css'
import InputEvent from './components/InputEvent/index'
import MainWrapper from './components/MainWrapper'
import TodoInput from './components/TodoInput/index'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  });
  const state = useSelector((state)=>state.posts)
  console.log(state);
  return (
    <div className="app">
      <MainWrapper>
      <h1 className='app_title'>Спортивные мероприятия</h1>
      <div className='app_row'>
      <InputEvent/>
      {state.map((item) => (
         <TodoInput key={item.id} data={item}/>
        )).reverse()}
      </div>
      </MainWrapper>
    </div>
  )
}

export default App;
