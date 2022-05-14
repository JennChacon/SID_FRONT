import * as React from 'react';
import GraficaProducto from '../../componentes/GraficaProducto'
import { Box, Button, Container, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import Cargando from '../../componentes/Cargando';
import config from '../../config.json'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Inicio = ({ datos }) => {
    const [Bono, setBono] = React.useState();
    const [EstadoBono, setEstadoBono] = React.useState();
    const [fechaC, setFechaC] = React.useState();
    const [fechaA, setFechaA] = React.useState();
    const [apiBono, setapiBono] = React.useState({});
    const [loading1, setLoading1] = React.useState(true)
    const [err, setErr] = React.useState(false);

    React.useEffect(() => {
        setLoading1(false);
        setBono(datos.serial);
        setEstadoBono(datos.state);
        setFechaC(datos.creationDate);
        setFechaA(datos.actualizationDate);
    }, []);

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch PUT Request Example' })
    };

    const CambiarEstado = async () => {
        setLoading1(true);
        try {
            const res = await fetch(
                config.Api.url + "gift/" + Bono, requestOptions
            );
            const respuesta = await res.json()
            console.log(respuesta);
            respuesta.error ? setErr(true) : setapiBono(respuesta.info);
            respuesta.error ? setErr(true) : setEstadoBono(respuesta.info.state);
            respuesta.error ? setErr(true) : setFechaA(respuesta.info.actualizationDate);
            handleOpen();
            setLoading1(false);
        } catch (error) {
            setErr(true);
            setLoading1(false);
            console.log("respuest222a");
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose2 = () => {
        setOpen(false);
    }
    const handleClose = () => {
        let date = new Date();
        setFechaA(date.getFullYear() + "-" + (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) + "-" + date.getDate());
        setEstadoBono('NO DISPONIBLE');
        setOpen(false);
    }

    return (
        <div>
            {
                loading1 ?
                    <Cargando />
                    :
                    !err ?
                        <Container>
                            <Box sx={style}>
                                <Button size='large' variant='text' sx={{ right: '465px', top: '-146px', color: 'black' }} onClick={back} endIcon={<ArrowBackIosIcon />}>
                                </Button>
                                <Container sx={{ width: '58%', display: 'flex', flexDirection: 'column' }}>
                                    <Container sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                                        <Typography sx={styleTypo} variant="h5" component="h2">
                                            Bono:
                                        </Typography>
                                        <Typography sx={styleTypo} variant="h6" component="h2">
                                            {Bono}
                                        </Typography>
                                    </Container>
                                    <Container sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                                        <Typography sx={styleTypo} variant="h5" component="h2">
                                            Descuento:
                                        </Typography>
                                        <Typography sx={styleTypo} variant="h6" component="h2">
                                            15%
                                        </Typography>
                                    </Container>
                                    <Container sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                                        <Typography sx={styleTypo} variant="h5" component="h2">
                                            Fecha de creación:
                                        </Typography>
                                        <Typography sx={styleTypo} variant="h6" component="h2">
                                            {fechaC}
                                        </Typography>
                                    </Container>
                                    {
                                        EstadoBono == 'NO DISPONIBLE' ?
                                            <Container sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                                                <Typography sx={styleTypo} variant="h5" component="h2">
                                                    Fecha de Remisión:
                                                </Typography>
                                                <Typography sx={styleTypo} variant="h6" component="h2">
                                                    {fechaA}
                                                </Typography>
                                            </Container>
                                            : ''
                                    }
                                    <Container sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                                        <Typography sx={styleTypo} variant="h5" component="h2">
                                            Estado:
                                        </Typography>
                                        {
                                            EstadoBono == 'DISPONIBLE' ?
                                                <Typography sx={styleTypoEstadoDispo} variant="h6" component="h2">
                                                    {EstadoBono}
                                                </Typography>
                                                :
                                                <Typography sx={styleTypoEstadoRedi} variant="h6" component="h2">
                                                    {EstadoBono}
                                                </Typography>
                                        }
                                    </Container>
                                </Container><br></br>
                                {
                                    EstadoBono == 'DISPONIBLE' ?
                                        <Button variant='contained' onClick={CambiarEstado} >
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
                        :
                        <Container>
                            <Box sx={styleP}>
                                <Modal
                                    open={true}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={styleModal}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            ERROR
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            No se pudo cambiar el estado
                                        </Typography><br></br>
                                        <Button variant='contained' onClick={handleClose2}>
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