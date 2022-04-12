import * as React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


const Inicio = () => {

  const [cedula, setCedula] = React.useState();

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

  const handleChange=(event)=> {
    setCedula(event.target.value);
  };

  return (
    <div>
      <Container>
          <Box sx={style}>
            <Typography sx={{ marginBlockEnd: '10px' }} variant="h5" component="h2">
              Inicio de sesión empleado
            </Typography>
            <TextField sx={{ marginBlockEnd: '10px' }} onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)}} onChange={handleChange} type="number" id="cedula" label="Cédula" variant="outlined" />
            <Button variant='contained' href={`/Empleado/ValidarEmple/${cedula}`}>
              Enviar
            </Button>
          </Box>
      </Container>
    </div>
  );
}
export default Inicio