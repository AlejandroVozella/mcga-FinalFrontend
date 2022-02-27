import Swal from "sweetalert2";
import axios from "../../config/axios";
import {
  ADD_RECEPCIONISTA,
  ADD_RECEPCIONISTAS_SUCCESS,
  ADD_RECEPCIONISTAS_ERROR,
  GET_RECEPCIONISTAS,
  GET_RECEPCIONISTAS_SUCCESS,
  GET_RECEPCIONISTAS_ERROR,
} from "../../Types/Recepcionistas";

const RecepcionistaUrl = "/recepcionistas";

//Obtengo todos los Recepcionistas.

export function getAllRecepcinistasAction() {
  return async (dispatch) => {
    dispatch(getAllRecepcinistas());
    try {
      const { data } = await axios.get(`${RecepcionistaUrl}`);
      dispatch(getAllRecepcionistasSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllRecepcionitasError(true));
    }
  };
}

const getAllRecepcinistas = () => ({
  type: GET_RECEPCIONISTAS,
});

const getAllRecepcionistasSuccess = (recepcionistas) => ({
  type: GET_RECEPCIONISTAS_SUCCESS,
  payload: recepcionistas.data,
});

const getAllRecepcionitasError = (status) => ({
  type: GET_RECEPCIONISTAS_ERROR,
  payload: status,
});
