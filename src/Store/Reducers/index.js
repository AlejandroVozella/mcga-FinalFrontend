import { combineReducers } from "redux";
import RecepcionistasReducers from "./RecepcionistasReducers";
import ClientesReducers from "./ClientesReducers";
import ReservasReducers from "./ReservasReducers";

export default combineReducers({
    recepcionistas:RecepcionistasReducers,
    clientes:ClientesReducers,
    reservas:ReservasReducers
});
