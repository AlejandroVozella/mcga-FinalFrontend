import Swal from "sweetalert2";
import axios from "../../config/axios";
import {
  ADD_RECEPCIONISTA,
  ADD_RECEPCIONISTAS_SUCCESS,
  ADD_RECEPCIONISTAS_ERROR,
  GET_RECEPCIONISTAS,
  GET_RECEPCIONISTAS_SUCCESS,
  GET_RECEPCIONISTAS_ERROR,
  DELETE_RECEPCIONISTA,
  DELETE_RECEPCIONISTAS_SUCCESS,
  DELETE_RECEPCIONISTAS_ERROR,
  EDIT_RECEPCIONISTAS,
  EDIT_RECEPCIONISTAS_SUCCESS,
  EDIT_RECEPCIONISTAS_ERROR,
  SET_RECEPCIONISTAS,
} from "../../Types/Recepcionistas";

const RecepcionistaUrl = "/recepcionistas";

//Obtengo todos los Recepcionistas.

export function getAllRecepcionistasAction() {
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

//Crear Nuevo Cliente.

export function addnewRecepcionistaAction(recepcionista) {
  return async (dispatch) => {
    dispatch(addnewRecepcionista());
    try {
      //Intenta cargar un cliente
      await axios.post(`${RecepcionistaUrl}`, recepcionista);
      //Si lo agrega correctamente , dispara la accion con el objeto recepcionista cargado.
      dispatch(addNewRecepcionstaSuccess(recepcionista));

      //Alerta Exitosa
      Swal.fire(
        "Correcto",
        "El recepcionista se agrego correctamente",
        "success"
      );
    } catch (error) {
      //Envia error por falla
      dispatch(addNewRecepcionistaError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error",
        text: "Ocurrio un error , ingrese nuevamente recepcionista",
      });
    }
  };
}

const addnewRecepcionista = () => ({
  type: ADD_RECEPCIONISTA,
});

// Si el cliente se guarda en la base de datos.
const addNewRecepcionstaSuccess = (client) => ({
  type: ADD_RECEPCIONISTAS_SUCCESS,
  payload: client,
});

// Si ocurre un error en el guardado del cliente.
const addNewRecepcionistaError = (status) => ({
  type: ADD_RECEPCIONISTAS_ERROR,
  payload: status,
});

// Eliminar Recepcionista.
export const deleteRecepcionistaAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteRecepcionista());
    try {
      await axios.delete(`${RecepcionistaUrl}/${id}`);
      dispatch(deleteRecepcionistaSuccess(id));
      Swal.fire(
        "Eliminado",
        "El recepcionista se elimino correctamente...",
        "success"
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteRecepcionistaError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error al eliminar recepcionista, intenta de nuevo.",
      });
    }
  };
};

const deleteRecepcionista = () => ({
  type: DELETE_RECEPCIONISTA,
});

const deleteRecepcionistaSuccess = (id) => ({
  type: DELETE_RECEPCIONISTAS_SUCCESS,
  payload: id,
});

const deleteRecepcionistaError = (status) => ({
  type: DELETE_RECEPCIONISTAS_ERROR,
  payload: status,
});

// Editar Cliente.
export const editRecepcionistaAction = (recepcionista) => {
  return async (dispatch) => {
    try {
      // Primero intenta cargar un cliente. Cargando = True.
      await axios.put(
        `${RecepcionistaUrl}/${recepcionista?._id}`,
        recepcionista
      );
      //await axios.put(`https://app-finalmcga.herokuapp.com/clientes/${client._id}`, client);
      // Si lo agrega correctamente, dispara la accion con el objeto de cliente cargado correctamente.
      dispatch(editRecepcionistaSuccess(recepcionista));
      dispatch(getAllRecepcionistasAction());
      // Alerta exitosa.
      Swal.fire("Correcto", "El cliente se edito correctamente...", "success");
    } catch (error) {
      // Si falla, envia una notificacion de error.
      dispatch(editRecepcionistaError(true));
      // Alerta de error.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
};

const editRecepcionistaSuccess = (recepcionista) => ({
  type: EDIT_RECEPCIONISTAS_SUCCESS,
  payload: recepcionista,
});

const editRecepcionistaError = (status) => ({
  type: EDIT_RECEPCIONISTAS_ERROR,
  payload: status,
});

export const setRecepcionistaAction = (recepcionista) => {
  return async (dispatch) => {
    dispatch(setRecepcionista(recepcionista));
  };
};

const setRecepcionista = (recepcionista) => ({
  type: SET_RECEPCIONISTAS,
  payload: recepcionista,
});
