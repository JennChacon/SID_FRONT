import { Box, Button, Container, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import config from '../../config.json';
import Cargando from '../../componentes/Cargando';
import { Redirect, useParams } from 'react-router-dom';

const Inicio = () => {
  const { cedula } = useParams();
  const [apiEmpleado, setapiempleado] = React.useState("");
  const [loading1, setLoading1] = useState(true)
  const [err, setErr] = React.useState(false);

  const styleP = {
    height: '97vh',
    display: 'flex',
    border: '1px solid white',
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: 20,
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {
    console.log("aqu")
    return (
      window.location.href = `/Empleado`
    )
  }

  React.useEffect(() => {
    setLoading1(true)
    const fetchEmple = async () => {
      try {
        const res = await fetch(
          config.Api.url + "users/" + cedula
        );
        const respuesta = await res.json()
        console.log(respuesta);
        setapiempleado(respuesta.name);
        setLoading1(false)
      } catch (error) {
        setErr(true)
        setLoading1(false)
        console.log("respuesta");
      }
    };

    fetchEmple();
  }, []);

  return (
    <div>
      {
        loading1 ?
          <Cargando />
          :
          !err ?
            <Redirect to='/Empleado/LeerBono' />
            :
            <Container>
              <Box sx={styleP}>
                <Modal
                  open={true}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      ERROR
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      El empleado no existe
                    </Typography><br></br>
                    <Button variant='contained' onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Box>
                </Modal>
              </Box>
            </Container>
      }
    </div>
  );
}
export default Inicio