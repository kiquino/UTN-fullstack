//import {Link} from 'react-router-dom';
import '../../styles/components/layout/Nav.css';
import {NavLink} from 'react-router-dom';
const Nav = (props) =>{

    return(<nav>
        <div className="contenedor">
            <ul>
                <li><NavLink activeClasssName="activo" exact to="/">Home</NavLink></li>
                <li><NavLink activeClasssName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink activeClasssName="activo" exact to="/novedades">Novedades</NavLink></li>
                <li><NavLink activeClasssName="activo" exact to="/contacto">Contacto</NavLink></li>
            </ul>
        </div>
    </nav>);
}
export default Nav;