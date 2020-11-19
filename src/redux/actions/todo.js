import point from '../../point.js'
// функция проверят успешно ли отправился запрос
const checkResponse = (response, errText) => {
    if (!response.ok) throw new Error(errText)
    return response.json()
  }
  // функция вытаскивает из объекта ошибки строку
  const errorHandler = (error) => (error.response ? error.response.data : error.message)
  
  export const getTodos = () => (dispatch) => {
    dispatch({ type: 'GET_TODOS_LOADING' })
    fetch(`${point}/list`)
      .then((response) => checkResponse(response, 'Ошибка загрузки'))
      .then((data) => {
        dispatch({ type: 'GET_TODOS_SUCCESS', data })
      })
      .catch((error) => {
        dispatch({ type: 'GET_TODOS_FAILED', error: errorHandler(error) })
      })
  }
  
  export const addTodo = (body) => (dispatch) => {
    dispatch({ type: 'ADD_TODO_LOADING' })
    console.log(body)
    fetch(`${point}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => checkResponse(response, 'Ошибка добавления'))
      .then((data) => {
        dispatch({ type: 'ADD_TODO_SUCCESS' })
      })
      .catch((error) => {
        dispatch({ type: 'ADD_TODO_FAILED', error: errorHandler(error) })
      })
  }