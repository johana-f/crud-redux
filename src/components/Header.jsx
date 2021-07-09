import  React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
           
            <Link to={'/'}
            className="text-light"
            >CRUD</Link> 

            <Link to={"/productos/nuevo"}
            className="btn btn-warning nuevo-post d-block d-md-inline-block"
            >Agregar producto &#43;</Link> 
        </nav>
    );
}
 
export default Header;