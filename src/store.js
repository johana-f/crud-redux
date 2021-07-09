import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";//permite hacer funciones asincronas
import reducer from "./reducers";

// creo el store
const store = createStore(reducer, compose(applyMiddleware(thunk), /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */

typeof window === 'object' && // el tipo window es igual a object y 
typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?  // el tipo  window.__REDUX_DEVTOOLS_EXTENSION__ no está como indefinido ? entonces
window.__REDUX_DEVTOOLS_EXTENSION__() : f => f//  agrega el codigo window.__REDUX_DEVTOOLS_EXTENSION__() y sino : retorna f => f
)



);

export default store;
