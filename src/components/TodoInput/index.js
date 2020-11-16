import React from 'react'
import 'materialize-css'
import './index.css'
import Moment from 'react-moment'
import 'moment/locale/ru'

function App(props) {
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
     
    </div>
  );
}

export default App;
