import React,{useEffect} from 'react'
import 'materialize-css'
import './index.css'
import Moment from 'react-moment'
import { useDispatch,useSelector } from 'react-redux';
import {deleteTodo} from '../../redux/actions/index'
import {getTodos} from '../../redux/actions/index'
import 'moment/locale/ru'

function App(props) {
    const dispatch = useDispatch();
    const success = useSelector(state=>state.todo.delete.success)
    const failed = useSelector(state=>state.todo.delete.failed)
    const loading = useSelector(state=>state.todo.delete.loading)
    const deleteItem=(e)=>{
dispatch(deleteTodo(props.data.id))
    }
    useEffect(()=>{
        if(success) dispatch(getTodos())
        
         },[getTodos,success])
  return (
    <div className="api_card">
        <header className={`api_card_header ${props.data.select}`}>
        <div className="api_card-wrapper">
<div className="api_card_header-row">
    <div>{props.data.author}</div>
    <Moment local='ru' fromNow>{props.data.date}</Moment>
</div>
   </div>
        </header>
     <div className="api_card_body">
         <div className="api_card-wrapper">
             <div className="api_card_body_title">
                 {props.data.select}
             </div>
             <div  className="api_card_body_place">
                <span>Место:</span>  {props.data.place}
             </div>
             <div className="api_card_body_date">
                <span>Дата:</span>
                <Moment format="DD/MM/YYYY">
                {new Date(props.data.date)}
            </Moment>
             </div>
             <div className="api_card_body_time">
                <span>Время:</span>
                <Moment locale='ru' format="hh:mm a">
                {new Date(props.data.date)}
            </Moment>
             </div>
             <div className="api_card_body_contact">
                <span>Номер телефона:</span>
                {props.data.number}
             </div>
             <div className="inputEventRow">
           {true&&<button onClick={e=>deleteItem(e)} className="api_card_body_delete">Удалить</button>}  
             {loading&&<div style={{color:'blue'}} className="inputEvent_alert ">Загрузка...</div>}
             {failed&&<div style={{color:'red'}} className="inputEvent_alert ">Ошибка отправки</div>}
             </div>
         </div>
     </div>
    </div>
  );
}

export default App;
