import clienteAxios from "../config/axios";

import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

export function crearNuevoProductoAction(producto) {
  //console.log('estoy en el action')
  return async(dispatch) => {
    dispatch(agregarProducto());

    try {
     await clienteAxios.post('/productos', producto)
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      dispatch(agregarProductoError(true));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true, //se encarga de ir modificndo la data de la aplicación
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload:producto
});

const agregarProductoError = (estado) =>({
  type: AGREGAR_PRODUCTO_ERROR,
  payload:estado
});
