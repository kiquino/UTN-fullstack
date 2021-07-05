import React from 'react';
import '../styles/components/pages/Nosotros.css';

const Nosotros = (props)=>{

    return (<section>
        <div className="historia">
            <h2>Historia</h2>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="staff">
            <div className="persona">
                <img src="assets/nosotros/nosotros1.jpg" alt="foto de personal"/>
                <div className="nombre"><p>J.P MORGAN</p></div>
                <div className="posicion"><p>Manager</p></div>
                <div className="desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.</p></div>
            </div>
            <div className="persona">
                <img src="assets/nosotros/nosotros2.jpg" alt="foto de personal"/>
                <div className="nombre"><p>J.P MORGAN</p></div>
                <div className="posicion"><p>Manager</p></div>
                <div className="desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.</p></div>
            </div>
            <div className="persona">
                <img src="assets/nosotros/nosotros3.jpg" alt="foto de personal"/>
                <div className="nombre"><p>J.P MORGAN</p></div>
                <div className="posicion"><p>Manager</p></div>
                <div className="desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.</p></div>
            </div>
            <div className="persona">
                <img src="assets/nosotros/nosotros4.jpg" alt="foto de personal"/>
                <div className="nombre"><p>J.P MORGAN</p></div>
                <div className="posicion"><p>Manager</p></div>
                <div className="desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.</p></div>
            </div>
            
        </div>
    </section>);
}
export default Nosotros;