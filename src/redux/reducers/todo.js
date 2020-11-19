const initialState = {
    data: [],
    get: {
      success: false,
      loading: false,
      failed: false,
      error: '',
    },
    add: {
      success: false,
      loading: false,
      failed: false,
      error: '',
    },
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_TODOS_SUCCESS':
        return {
          ...state,
          data: action.data,
          get: {
            success: true,
            loading: false,
            failed: false,
            error: '',
          },
        }
      case 'GET_TODOS_LOADING':
        return {
          ...state,
          get: {
            success: false,
            loading: true,
            failed: false,
            error: '',
          },
        }
      case 'GET_TODOS_FAILED':
        return {
          ...state,
          get: {
            success: false,
            loading: false,
            failed: true,
            error: action.error,
          },
        }
  
      case 'ADD_TODO_SUCCESS':
        return {
          ...state,
          add: {
            success: true,
            loading: false,
            failed: false,
            error: '',
          }
        }
      case 'ADD_TODO_LOADING':
        return {
          ...state,
          add: {
            success: false,
            loading: true,
            failed: false,
            error: '',
          }
        }
      case 'ADD_TODO_FAILED':
        return {
          ...state,
          add: {
            success: false,
            loading: false,
            failed: true,
            error: action.error,
          },
        }
      case 'ADD_TODO_RESET':
        return {
          ...state,
          add: initialState.add,
        }
      default:
        return state
    }
  }
  
  export default reducer