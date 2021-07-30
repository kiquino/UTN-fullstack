
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home"


import '../styles/pages/servicios.css';
const Servicios =(props) =>{
    return(
        <div className="servicios-style">
            <Button
            
            startIcon={<HomeIcon />}
            size="large"
             variant="contained"
             >Hola Servicios</Button>
        </div>
        
    )
}
export default Servicios;