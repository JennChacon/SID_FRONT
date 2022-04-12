import * as React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


const Inicio = () => {

  const [Bono, setBono] = React.useState();

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
    console.log("s");
    setBono(event.target.value);
    console.log(Bono);
  };

  return (
    <div>
      <Container>
          <Box sx={style}>
            <Typography sx={{ marginBlockEnd: '10px' }} variant="h5" component="h2">
              Ingresar Bono Descuento
            </Typography>
            <TextField sx={{ marginBlockEnd: '10px' }} onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,13)}} onChange={handleChange} type="number" id="bono" label="Bono" variant="outlined" />
            <Button variant='contained' href={`/Empleado/ValidarBono/${Bono}`}>
              Validar
            </Button>
          </Box>
      </Container>
    </div>
  );
}
export default Inicio