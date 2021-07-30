import React from 'react';
import { TextField } from '@material-ui/core';
const HomePage = (props)=>{
return(
    <div>
        <TextField
        type="email"
        color="primary" 
        variant="outlined"
        label="Email"
        placeholder="Email@email.com"
        ></TextField>
    </div>
 
);
}
export default HomePage;