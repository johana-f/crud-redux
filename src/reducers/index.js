import { combineReducers } from "redux"; 
import productosReducer from './productosReducer';

// funcion combina reducers
export default combineReducers({
    productos: productosReducer  
})