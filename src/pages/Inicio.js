import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, Stack } from '@mui/material';
import image from '../static/img/inicio.jpg';
import { deepPurple } from '@mui/material/colors';


const Inicio = () => {

  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 310,
    height: 200,
    bgcolor: 'white',
    border: '2px solid black',
    borderRadius: '30px',
    color: 'red',
    textAlign: 'center',
    fontWeight: 600,
    padding: '2px'
  };
  const usuario = 'nouser';
  const style = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 285,
    bgcolor: 'background.paper',
    border: '2px solid #b1b1b1',
    borderRadius: '20px',
    boxShadow: 24,
    p: 1,
  };

  return (
    <div>
      <Box sx={style}>
        <Box sx={{ marginTop: '5px' }}>
          <img style={{ borderRadius: '20px' }} width={283} src={`${image}`} />
        </Box>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Escanear código de barras
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2, marginBlockEnd: '10px' }}>
          Escanea el código de barras de la prenda que desees
        </Typography>
        <Button sx={{ marginBlockEnd: '3px' }} variant='contained' href='/barcode'>
          Escanear
        </Button>
      </Box>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={true}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={true}>
          <Box sx={styleModal}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
              <Grid item xs={12}>
                <Button variant='text' href='/home'>
                  Cerrar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  ¡Recibe un 15% de descuento en tu próxima compra!
                </Typography>
              </Grid><br></br>
              <Grid item xs={12}>
                <Button variant='contained' href='/Formulario'>
                  Obtener descuento
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default Inicio