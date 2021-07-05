import React from 'react';
import '../styles/components/pages/Novedades.css';

const Novedades = (props)=>{

    return (<section >
        <h2>Novedades</h2>
        <div className="articulos"> <div className="articulo">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <div className="cuerpo"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        </div>
        <div className="articulo">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <div className="cuerpo"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        </div>
        <div className="articulo">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <div className="cuerpo"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        </div></div>
       
    </section>);
}
export default Novedades;