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
  }, []);
  const state = useSelector((state)=>state.posts)
  console.log(state);
  // const [loading, setLoading] = React.useState(true)
  // const [failed, setFailed] = React.useState(false)
  // const [todos, setTodos] = React.useState([])
  // React.useEffect(() => {
  //   fetch(`${point}/list`)
  //     .then((response) => response.json())
  //     .then((json) =>{
  //       setLoading(false)
  //       setTodos(json)//usestate получает массив
  //     })
  //       .catch((err)=>{
  //         setLoading(false)
  //         setFailed(true)
  //       })},[])
  return (
    <div className="app">
      <MainWrapper>
      <h1 className='app_title'>Спортивные мероприятия</h1>
      <div className='app_row'>
      <InputEvent/>
      {state.map((item) => (
         <TodoInput key={item.id} data={item}/>
        )).reverse()}
      {/* {loading&&<div className="app_load">Загрузка...</div>}
      {failed&&<div className='api_card_error'>Не удалось получить список мероприятий !</div>} */}
      </div>
      
      </MainWrapper>
     
    </div>
  )
}

export default App;
