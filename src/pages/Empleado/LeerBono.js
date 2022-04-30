import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { Redirect } from "react-router-dom";


const Inicio = () => {
  const [bono, setbono] = useState("");
  const onTextChange = (e) => setbono(e.target.value);


  const handleSubmit = () => {
    if(bono){
      return (
        window.location.href = `/Empleado/ValidarBono/${bono}`
      )
    }else{
      
    }
  };

  const style = {
    height: '97vh',
    display: 'flex',
    border: '1px solid white',
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: 20,
  };

  return (
    <div>
      <Container>
        <Box sx={style}>
          <Button variant='contained' sx={{ left: '430px', top: '-206px' }} href={`/Empleado/ProductosCalificados`}>
            Ver Productos Calificados
          </Button>
          <Typography sx={{ marginBlockEnd: '10px' }} variant="h5" component="h2">
            Ingresar Bono Descuento
          </Typography>
          <TextField sx={{ marginBlockEnd: '10px' }}
            onChange={onTextChange}
            value={bono}
            type="text" 
            id="bono" 
            label="Bono" 
            variant="outlined"
            required
          /><br></br>
          <Button variant='contained' onClick={handleSubmit}>
            Validar
          </Button>
        </Box>
      </Container>
    </div>
  );
}
export default Inicio