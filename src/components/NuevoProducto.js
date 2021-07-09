import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {crearNuevoProductoAction} from '../actions/productosActions';


const NuevoProducto = () => {

  const dispatch = useDispatch();

  const agregarProducto = () => dispatch(crearNuevoProductoAction());

 const submitNuevoProducto = (e) =>{
  e.preventDefault();

  //validar el formulario

  //comprobar que no hayan errores

  //crear nuevo producto
  agregarProducto();
 }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNuevoProducto} >
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre  del producto"
                  name="nombre"
                />
              </div>

              <div className="form-group">
                <label>Precio producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="precio del producto"
                  name="precio"
                />
              </div>
              <button className="btn btn-info font-weight-bold text-uppercase d-block w-100">
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
