import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker,{ registerLocale } from "react-datepicker";
import NumberFormat from 'react-number-format'
import ru from "date-fns/locale/ru"; 
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/index';
import 'materialize-css';

function App() {
  const dispatch = useDispatch();
    registerLocale("ru", ru)
    const data = [{value: 'Футбол',label: "Football"},{value: 'Баскетбол',label: "Basketball"},{value: 'Теннис',label: "Tennis" }]
      const[select, setSelect] = useState()
      const[date, setDate] = useState('')
      const[number, setNumber]=React.useState('')
      const[author, setAuthor]=React.useState('')
      const[place, setPlace]=React.useState('')
      const handleClick=()=>{
        if(select&&date&&number&&author.length>=3&&place.length>=7){
          dispatch(createPost({
            "author":author,"date":date,"select":select,"number":number,"place":place
          }))
          localStorage.setItem('myData',[{
            "author":author,"date":date,"select":select,"number":number,"place":place
          }] );
          setSelect(''); setDate('');setNumber('');setAuthor('');setPlace('') 
        }
      }
  return (
    <div className="inputEvent">
      <h2 className='inputEvent_title'>Создать мероприятие </h2>
      <div className="row">  
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input value={author} onChange={e=>setAuthor(e.target.value)} id="autor" type="text" />
              <label htmlFor="autor">Автор</label>
            </div>
          </div>
        </form>
      </div>
      <Select
        className='inputEvent_select'
        placeholder="Выберите вид спорта"
        value={data.find(obj => obj.label === select)} 
        options={data} 
        onChange={e=>setSelect(e.label)}
      />
       <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input value={place} onChange={e=>setPlace(e.target.value)} id="place" type="text" />
              <label htmlFor="place">Место</label>
            </div>
          </div>
        </form>
      </div>
      <DatePicker
      selected={date}
      onChange={date => setDate(date)}
      showTimeInput
      minDate={new Date()}
      timeFormat="p"
      timeIntervals={15}
      timeInputLabel="Время:"
      dateFormat="dd/MM/yyyy h:mm "
      disabledKeyboardNavigation
      placeholderText="Дата и время"
      locale="ru"
    />
   
    <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
               <NumberFormat className='inputEvent_number' onChange={(event) => setNumber(event.target.value)}
        value={number} format="+996 (###) ######" mask="_"/>
            <label >Контакты</label>
            </div>
          </div>
        </form>
      </div>
     <br/>
     <button onClick={handleClick} className="btn waves-effect waves-light" type="submit" name="action">Отправить</button>
    </div>
  );
}

export default App;
