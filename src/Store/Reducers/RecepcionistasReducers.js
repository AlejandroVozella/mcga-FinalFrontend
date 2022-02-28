import {
  ADD_RECEPCIONISTA,
  ADD_RECEPCIONISTAS_SUCCESS,
  ADD_RECEPCIONISTAS_ERROR,
  GET_RECEPCIONISTAS,
  GET_RECEPCIONISTAS_ERROR,
  GET_RECEPCIONISTAS_SUCCESS,
  DELETE_RECEPCIONISTA,
  DELETE_RECEPCIONISTAS_SUCCESS,
  DELETE_RECEPCIONISTAS_ERROR,
  EDIT_RECEPCIONISTAS,
  EDIT_RECEPCIONISTAS_SUCCESS,
  EDIT_RECEPCIONISTAS_ERROR,
  SET_RECEPCIONISTAS
} from '../../Types/Recepcionistas';

const initialState = {
  recepcionistas:[],
  error:null,
  loading:false,
  recepcionista:null,
  selectedRecepcionista:null,
}


export default function clientes(state = initialState, action) {
  switch (action.type) {
    case ADD_RECEPCIONISTA:
      return {
        ...state,
        loading: true,
      };

    case ADD_RECEPCIONISTAS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: [...state.clients, action.payload],
        error: false,
      };

    case ADD_RECEPCIONISTAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case GET_RECEPCIONISTAS:
      return {
        ...state,
        loading: true,
      };

    case GET_RECEPCIONISTAS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
        error: false,
      };

    case GET_RECEPCIONISTAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case DELETE_RECEPCIONISTA:
      return {
        ...state,
        loading: true,
      };

    case DELETE_RECEPCIONISTAS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: state.clients.filter(
          (client) => client._id !== action.payload
        ),
        error: false,
      };

    case DELETE_RECEPCIONISTAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case EDIT_RECEPCIONISTAS:
      return {
        ...state,
        loading: false,
        selectedClient: action.payload,
      };

    case EDIT_RECEPCIONISTAS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: state.clients.filter(
          (client) => client._id !== action.payload
        ),
        error: false,
      };

    case EDIT_RECEPCIONISTAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case SET_RECEPCIONISTAS:
      return {
        ...state,
        loading: false,
        selectedClient: action.payload,
      };
    default:
      return state;
  }
}