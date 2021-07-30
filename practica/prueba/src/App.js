
import React from 'react';
import './App.css';

import Header from './components/layouts/header';
import Nav from './components/layouts/nav';
import Footer from './components/layouts/footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Personal from './pages/Personal';
import Servicios from './pages/Servicios';

function App() {
  return (
 <div>
   <Router>
    <Nav/>
    <Header/>

    <Switch>
      <Route path="/"
      exact component={
        HomePage
      }/>
      
      <Route path="/Personal" exact component={ Personal }/>
       <Route path="/Servicios" exact component={
         Servicios
       } />
   
   

 <Footer/>
 </Switch>
 </Router>
 </div>
  
  
 
  );
}

export default App;
