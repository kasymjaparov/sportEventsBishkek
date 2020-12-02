import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import DatePicker,{ registerLocale } from "react-datepicker";
import NumberFormat from 'react-number-format'
import ru from "date-fns/locale/ru"; 
import "react-datepicker/dist/react-datepicker.css";
import shortid from 'shortid'
import { useDispatch,useSelector } from 'react-redux';
import {addTodo} from '../../redux/actions/index'
import {getTodos} from '../../redux/actions/index'
import 'materialize-css';

function App() {
  const dispatch = useDispatch();
  const success = useSelector(state=>state.todo.add.success)
  const loading = useSelector(state=>state.todo.add.loading)
  const failed = useSelector(state=>state.todo.add.failed)

      const[select, setSelect] = useState()
      const[date, setDate] = useState('')
      const[number, setNumber]=React.useState('')
      const[author, setAuthor]=React.useState('')
      const[place, setPlace]=React.useState('')
      const[buttonDisabled, setButtonDisabled]=React.useState(true)

  useEffect(()=>{
    if(success) dispatch(getTodos())
     },[getTodos,success])

    registerLocale("ru", ru)

    const data = [{value: 'Футбол',label: "Football"},{value: 'Баскетбол',label: "Basketball"},{value: 'Теннис',label: "Tennis" }]
      
useEffect(()=>{
  if(select&&date&&number&&author.length>=3&&place.length>=7){
setButtonDisabled(false)
  }
},[place,select,number,author,place])

      const handleClick=(e)=>{
        e.preventDefault()
        if(select&&date&&number&&author.length>=3&&place.length>=7){
          let id = shortid.generate()
          setSelect(''); setDate('');setNumber('');setAuthor('');setPlace('') 
        dispatch(addTodo({ "id":id,"author":author,"date":date,"select":select,"number":number,"place":place}))
        let list=JSON.parse(window.localStorage.getItem('sportevents'))||window.localStorage.setItem('sportevents',JSON.stringify([{ "id":id,"author":author,"date":date,"select":select,"number":number,"place":place}]))
        window.localStorage.setItem('sportevents',JSON.stringify([...list,{"id":id,"author":author,"date":date,"select":select,"number":number,"place":place}]))
        }
      }
      
  return (
    <div className="inputEvent">
      <h2 className='inputEvent_title'>Создать мероприятие </h2>
      <div className="row">  
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input maxLength='9' value={author} onChange={e=>setAuthor(e.target.value)} id="autor" type="text" />
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
              <label htmlFor="place">Адрес</label>
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
            <label>Контакты</label>
            </div>
          </div>
        </form>
      </div>
     <br/>
     <div  className="inputEventRow"><button disabled={buttonDisabled} onClick={e=>handleClick(e)} className="btn waves-effect waves-light">Отправить</button>
     {success&&<div style={{color:'green'}} className="inputEvent_alert ">Отправлено</div>}
     {loading&&<div style={{color:'blue'}} className="inputEvent_alert ">Загрузка...</div>}
     {failed&&<div style={{color:'red'}} className="inputEvent_alert ">Ошибка отправки</div>}
     </div>
    </div>
  )
}

export default App
