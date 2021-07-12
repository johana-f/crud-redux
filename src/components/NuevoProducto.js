import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {crearNuevoProductoAction} from '../actions/productosActions';


const NuevoProducto = () => {

  const  [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);

  const dispatch = useDispatch();

  const cargando = useSelector((state) =>state.productos.loading);
  console.log(cargando);

  const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

 const submitNuevoProducto = (e) =>{
  e.preventDefault();

  //validar el formulario
  if(nombre.trim() ==='' || precio<=0){
    return;
  }

  //comprobar que no hayan errores

  //crear nuevo producto
  agregarProducto({
    nombre,
    precio
  });
 };

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
                  value={nombre}
                  onChange={e =>setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="precio del producto"
                  name="precio"
                  value={precio}
                  onChange={e=>setPrecio(Number(e.target.value))}
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
