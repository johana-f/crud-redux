import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

export function crearNuevoProductoAction(){
  return(dispatch) =>{
      //console.log('estoy en el action')
      dispatch(agregarProducto())
  }
}

const agregarProducto = () =>({
  type:AGREGAR_PRODUCTO,
  payload:true //se encarga de ir modificndo la data de la aplicación
});