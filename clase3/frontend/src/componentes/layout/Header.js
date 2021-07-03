import '../../styles/components/layout/Header.css';

const Header = (props)=>{
    return(<header>
        <div className="contenedor">
            <div className="logo">
                <img src="assets/logo.png" alt="Logo de la empresa"/>
            </div>
            <div className="important-text">
                <p><i>Viajar está bueno</i></p>
            </div>
        </div>
    </header>);
}
export default Header;