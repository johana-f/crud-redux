import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productos from './components/Productos';
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from './components/EditarProducto';
import { Provider } from 'react-redux'; //importamos el provider de react-redux que sirve para que fluyan los datos
import store from './store'; 

function App() {
  return (
    <Router>
      <Provider store={store} >
      <Header />
      <div className="container">
        <Switch>
          {/* rutas */}
        <Route exact path="/" component={Productos} />
        <Route exact path="/productos/nuevo" component={NuevoProducto} />
        <Route exact path="/productos/editar/:id" component={EditarProducto} />
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
