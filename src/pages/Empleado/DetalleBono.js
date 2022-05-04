import * as React from 'react';
import GraficaProducto from '../../componentes/GraficaProducto'
import { Box, Button, Container, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Inicio = ({datos}) => {
    const [Bono, setBono]  = React.useState();
    const [EstadoBono, setEstadoBono] = React.useState();
    const [fechaC, setFechaC] = React.useState();
    const [fechaA, setFechaA] = React.useState();

    React.useEffect(() => {
        setBono(datos.serial);
        setEstadoBono(datos.state);
        setFechaC(datos.creationDate);
        setFechaA(datos.actualizationDate);
    },[]);

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

    const styleModal = {
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

    const styleTypo = {
        padding: '5px',
    }
    const styleTypoEstado = {
        padding: '5px',
        color: 'green',
    }

    const styleTypoEstadoDispo = {
        padding: '5px',
        color: 'green',
    };
    const styleTypoEstadoRedi = {
        padding: '5px',
        color: 'Red',
    };

    const back = () => {
        window.history.back();
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        let date = new Date();
        setFechaA(date.getFullYear() + "-" + (date.getMonth() < 10 ? "0"+date.getMonth(): date.getMonth())+ "-" + date.getDate());
        setEstadoBono('NO DISPONIBLE');
        setOpen(false);
    }

    return (
        <Container>
          <Box sx={style}>
            <Button size='large' variant='text' sx={{right: '465px', top: '-146px', color: 'black'}} onClick={back} endIcon={<ArrowBackIosIcon />}>
            </Button>
            <Container sx={{ width: '58%', display: 'flex',flexDirection: 'column' }}>
                <Container sx={{display:'flex', justifyContent: 'left', alignItems: 'left',flexDirection: 'row'}}>
                    <Typography sx={styleTypo} variant="h5" component="h2">
                        Bono:
                    </Typography>
                    <Typography sx={styleTypo} variant="h6" component="h2">
                        {Bono}
                    </Typography>
                </Container>
                <Container sx={{display:'flex', justifyContent: 'left', alignItems: 'left',flexDirection: 'row'}}>
                    <Typography sx={styleTypo} variant="h5" component="h2">
                        Descuento:
                    </Typography>
                    <Typography sx={styleTypo} variant="h6" component="h2">
                        15%
                    </Typography>
                </Container>
                <Container sx={{display:'flex', justifyContent: 'left', alignItems: 'left',flexDirection: 'row'}}>
                    <Typography sx={styleTypo} variant="h5" component="h2">
                        Fecha de creación:
                    </Typography>
                    <Typography sx={styleTypo} variant="h6" component="h2">
                        {fechaC}
                    </Typography>
                </Container>
                {
                    EstadoBono == 'NO DISPONIBLE' ?
                    <Container sx={{display:'flex', justifyContent: 'left', alignItems: 'left',flexDirection: 'row'}}>
                        <Typography sx={styleTypo} variant="h5" component="h2">
                            Fecha de Remisión:
                        </Typography>
                        <Typography sx={styleTypo} variant="h6" component="h2">
                            {fechaA}
                        </Typography>
                    </Container>
                    : ''
                }
                <Container sx={{display:'flex', justifyContent: 'left', alignItems: 'left',flexDirection: 'row'}}>
                    <Typography sx={styleTypo} variant="h5" component="h2">
                        Estado:
                    </Typography>
                    {
                        EstadoBono == 'DISPONIBLE' ?
                            <Typography sx={styleTypoEstadoDispo}  variant="h6" component="h2">
                                {EstadoBono}
                            </Typography>
                        :
                            <Typography sx={styleTypoEstadoRedi}  variant="h6" component="h2">
                                {EstadoBono}
                            </Typography>
                    }
                </Container>
            </Container><br></br>
            {
                EstadoBono == 'DISPONIBLE' ?
                <Button variant='contained' onClick={handleOpen} >
                    Cambiar estado
                </Button>
                :
                <Button variant='contained' href={`/Empleado/LeerBono`} >
                    Volver a Inicio
                </Button>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Typography variant="h5" component="h2">
                        Estado Cambiado
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        El estado se cambió correctamente
                    </Typography><br></br>
                    <Button variant='contained' onClick={handleClose} >
                        Cerrar
                    </Button>
                </Box>
            </Modal>
          </Box>
      </Container>
    );
}
export default Inicio