import React from 'react';
import '../styles/components/pages/Contacto.css';
const Contacto = (props)=>{

    return (<main>
        <div className="contenedor columnas">
            <div className="columna ">

                <form className="formulario" method="" id="" action="">
                    <div className="persona-data fila">
                        <div className="fila">  <label for="Nombre">Nombre: </label>
                        <input id="Nombre" name="nombre" placeholder="Escriba su nombre" type="text"></input></div>
                        <div className="fila">  <label for="Apellido">Apellido: </label>
                        <input id="Apellido" name="apellido" placeholder="Escriba su Apellido" type="text"></input></div>
                        
                      
                    </div>
                    <div className="contact-data columna">
                        <div className="fila">  <label for="Email">Email: </label>
                        <input id="Email" name="Email" placeholder="Escriba su Email" type="email"></input></div>
                        <div className="fila">  <label for="Telefono">Telefono: </label>
                        <input id="Telefono" name="Telefono" placeholder="Escriba su Telefono" type="tel"></input></div>
                        
                      
                    </div>
                    <div className="centrado"><button type="submit">Enviar</button></div>

                </form>


            </div>
            <div className ="columna">
                <div className="medios">
                    <h2>Otras forma de Contactarse:</h2>
                </div>
                <div className="info">
                    <p>Teléfono - 011 15112131</p>
                    <p>Email - kskaka@gmail.com</p>
                    <p> Twitter - <a>@twitter</a></p>
                    <p> Faceboook - <a>@twitter</a></p>
                    <p> Instagram - <a>@twitter</a></p>
                </div>
            </div>
        </div>
    </main>);
}
export default Contacto;