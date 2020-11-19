import React from 'react'
import 'materialize-css'
import './index.css'
import Moment from 'react-moment'
import { useDispatch } from 'react-redux';

import 'moment/locale/ru'

function App(props) {
    const dispatch = useDispatch();
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
                <span>Контакты:</span>
                {props.data.number}
             </div>
             <button className="api_card_body_delete">Удалить</button>
         </div>
     </div>
    </div>
  );
}

export default App;
