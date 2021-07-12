import React from 'react';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import Header from './componentes/layout/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contacto from './pages/Contacto';
import HomePage from './pages/HomePage';
import Nosotros from './pages/Nosotros';
import Novedades from './pages/Novedades';



function App() {
  return ( <div >
    <Router > <Header/>
    <Nav/>
    <Switch>
    <Route path = "/"
    exact component = {
      HomePage
    }/> <Route path = "/nosotros"
    exact component = {
      Nosotros
    }/> < Route path = "/novedades"
    exact component = {
      Novedades
    }
    /> <    Route path = "/contacto"
    exact component = {
      Contacto
    }
    /> </Switch> < Footer /> </Router>


    </div>
  );
}

// Armar un layout básico separado en componentes estáticos utilizando como apoyo el material complementario provisto.

// Entregar un zip con el nombre y apellido del alumno que contenga todos los archivos excepto la carpeta node_modules

export default App;