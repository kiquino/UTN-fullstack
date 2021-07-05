import React from 'react';
import '../styles/components/pages/HomePage.css';
const HomePage = (props)=>{

    return (
    <main>
        <div className="contenedor-textoimagen">
        <div className="texto"><h2>Envíos a todo el Mundo!</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p></div>
        <div className="contenedor-imagen"><img src="assets/home/img01.jpg" alt="imagen 01" /></div>
        </div>
       <div className="texto"><p className="title">Por Agua o Por Aire</p></div>
       <div className="banner"><img src="assets/home/img02.jpg" alt="imagen 02"/></div>
       <div className="columns">
           <div className="text"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p></div>
           <div className="text"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p></div>
       </div>
        
    </main>);
}
export default HomePage;