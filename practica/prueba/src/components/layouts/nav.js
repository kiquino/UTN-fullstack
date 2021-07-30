import React from 'react';
import '../../styles/layouts/nav.css';
import { NavLink } from 'react-router-dom';
const Nav = ()=>{
return(<div className="flex horizontal w-100 nav-style">
    <nav className="flex horizontal w-100 m-lr-5 separado ">
        <div className="flex "> <ul className="flex nav m-lr-5">
            <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="activo" exact to="/personal">Personal</NavLink></li>
            <li><NavLink activeClassName="activo" exact to="/servicios">Servicios</NavLink></li>
            </ul> </div>
        <div className="flex text-large" > Administrador de Gastos!</div>
    </nav>
</div>);
}
export default Nav;