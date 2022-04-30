import * as React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


const Inicio = () => {

  const [cedula, setCedula] = React.useState();
  const onTextChange = (e) => setCedula(e.target.value);
  const handleSubmit = () => {
    return (
      window.location.href = `/Empleado/ValidarEmple/${cedula}`
    )
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
            <Typography sx={{ marginBlockEnd: '10px' }} variant="h5" component="h2">
              Inicio de sesión empleado
            </Typography>
            <TextField sx={{ marginBlockEnd: '10px' }}
             onChange={onTextChange} 
             value={cedula}
             type="number" 
             id="cedula" 
             label="Cédula" 
             variant="outlined"
             required />
            <Button variant='contained' onClick={handleSubmit}>
              Enviar
            </Button>
          </Box>
      </Container>
    </div>
  );
}
export default Inicio