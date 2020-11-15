import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker,{ registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru"; 
import "react-datepicker/dist/react-datepicker.css";
import 'materialize-css';

function App() {
    registerLocale("ru", ru)
    const data = [{value: 'Футбол',label: "Football"},{value: 'Баскетбол',label: "Basketball"},{value: 'Теннис',label: "Tennis" }]
      const [selectedValue, setSelectedValue] = useState()
      const [startDate, setStartDate] = useState(new Date())
      const[phoneNumber,setPhoneNumber]=useState('')
      const handleChange = e =>setSelectedValue(e.label)
      
  return (
    <div className="inputEvent">
      <h2 className='inputEvent_title'>Создать мероприятие</h2>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="autor" type="text" />
              <label htmlFor="autor">Автор</label>
            </div>
          </div>
        </form>
      </div>
      <Select
      className='inputEvent_select'
        placeholder="Выберите вид спорта"
        value={data.find(obj => obj.label === selectedValue)} 
        options={data} 
        onChange={handleChange}
      />
       <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="place" type="text" />
              <label htmlFor="place">Место</label>
            </div>
          </div>
        </form>
      </div>
      <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeInput
      timeFormat="p"
      timeIntervals={15}
      timeInputLabel="Время:"
      dateFormat="dd/MM/yyyy h:mm "
      locale="ru"
    />
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="contact" type="text" />
              <label htmlFor="contact">Контакты</label>
            </div>
          </div>
        </form>
      </div>
     <br/>
     <button class="btn waves-effect waves-light" type="submit" name="action">Submit
  </button>
    </div>
  );
}

export default App;
