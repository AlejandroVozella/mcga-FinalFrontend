import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Recepcionista from "./Recepcionista";

import { getAllRecepcionistasAction } from "../../Store/Acciones/recepcionistasActions";

const Recepcionistas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllRecepcionistas = () => dispatch(getAllRecepcionistasAction());
    getAllRecepcionistas();
  }, []);

  const { cargando, error, recepcionistas } = useSelector(
    (state) => state.recepcionistas
  );

  return (
    <>
      <h2 className="text-center my-5">Listado de Recepcionistas</h2>
      {cargando ? <h4 className="text-center"> Cargando... </h4> : null}

      {error ? (
        <p className="alert alert-danger p-2 m-4 text-center">
          Ocurrio un error.
        </p>
      ) : null}

      <div className="row pb-2">
        <div className="col-12 text-right">
          <Link
            to={'/Recepcionistas/new'}
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
          >
            Nuevo Recepcionista &#43;
          </Link>
        </div>
      </div>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Usuario</th>
            <br />
            <th scope="col">Password</th>
            <br />
            <th scope="col">Nombre</th>
            <br />
            <th scope="col">Apellido</th>
          </tr>
        </thead>
        <tbody>
          {recepcionistas.length === 0
            ? "No hay Recepcionistas"
            : recepcionistas.map((recepcionista) => (
                <Recepcionista
                  key={recepcionista._id}
                  recepcionista={recepcionista}
                />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Recepcionistas;
