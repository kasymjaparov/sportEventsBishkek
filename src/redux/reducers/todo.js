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
    delete: {
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

        case 'DELETE_TODO_SUCCESS':
        return {
          ...state,
          delete: {
            success: true,
            loading: false,
            failed: false,
            error: '',
          }
        }
      case 'DELETE_TODO_LOADING':
        return {
          ...state,
          delete: {
            success: false,
            loading: true,
            failed: false,
            error: '',
          }
        }
      case 'DELETE_TODO_FAILED':
        return {
          ...state,
          delete: {
            success: false,
            loading: false,
            failed: true,
            error: action.error,
          },
        }
     
      default:
        return state
    }
  }
  
  export default reducer