import React, { Fragment } from "react";

const Productos = () => {
  return (
    <Fragment>
      <h1>Listado de Productos</h1>
      <table className="table table-striped">
        <thead className="bg-info table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
      </table>
    </Fragment>
  );
};

export default Productos;
