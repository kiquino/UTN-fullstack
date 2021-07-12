import React from 'react';
import '../styles/components/pages/Contacto.css';
const Contacto = (props)=>{

    return (<main>
           <h2 className="centrado padding-t-1 padding-b-1">Contacto</h2>
        <div className="contenedor columnas">
         
            <div className="columna w-50">

                <form className="formulario" method="" id="" action="">
                    <div className="persona-data columna ">
                        <div className="fila w-50 separado">  <label for="Nombre">Nombre </label>
                        <input id="Nombre" name="nombre" className="input-style" placeholder="Escriba su nombre" type="text"></input></div>
                        <div className="fila  w-50 separado">  <label for="Apellido">Apellido </label>
                        <input id="Apellido" className="input-style" name="apellido" placeholder="Escriba su Apellido" type="text"></input></div>
                        
                      
                    </div>
                    <div className="persona-data columna ">
                        <div className="fila w-50 separado">  <label for="Email">Email </label>
                        <input className="input-style" id="Email" name="Email" placeholder="Escriba su Email" type="email"></input></div>
                        <div className="fila w-50 separado">  <label for="Telefono">Telefono </label>
                        <input className="input-style" id="Telefono" name="Telefono" placeholder="Escriba su Telefono" type="tel"></input></div>
                        
                      
                    </div>
                    <div className="izquierda"><button className="boton-style" type="submit">Enviar</button></div>

                </form>


            </div>
            <div className ="columna  w-50">
                <div className="medios">
                    <h3>Otras forma de Contactarse:</h3>
                </div>
                <div className="info">
                    <p>Teléfono - 011 15112131</p>
                    <p>Email - kskaka@gmail.com</p>
                    <p> Twitter - <a href="#">@twitter</a></p>
                    <p> Faceboook - <a href="#">@twitter</a></p>
                    <p> Instagram - <a href="#">@twitter</a></p>
                </div>
            </div>
        </div>
    </main>);
}
export default Contacto;