import * as React from 'react';
import { Box, Button, TextField, Modal, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Cargando from '../componentes/Cargando';
import config from '../config.json';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Formulario = () => {

    const [open, setOpen] = React.useState(false);
    const [Nombre, setNombre] = React.useState('');
    const [Apellido, setApellido] = React.useState('');
    const [Cedula, setCedula] = React.useState('');
    const [Correo, setCorreo] = React.useState('');
    const [Respuesta, setRespuesta] = React.useState('');
    const [loading1, setLoading1] = React.useState(true)
    const [err, setErr] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClose2 = () => {
        window.location.href = `/home`;
    }

    React.useEffect(() => {
        setLoading1(false);
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        height: 100,
        bgcolor: 'background.paper',
        border: '2px solid grey',
        borderRadius: '30px',
        color: '3d228e',
        textAlign: 'center',
        fontWeight: 600,
        p: 5,
    };

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

    const onNombreChange = (e) => setNombre(e.target.value);
    const onApellidoChange = (e) => setApellido(e.target.value);
    const onCedulaChange = (e) => setCedula(e.target.value);
    const onCorreoChange = (e) => setCorreo(e.target.value);

    const back = () => {
        window.history.back();
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch PUT Request Example' })
    };

    const GuardarFormulario = async () => {
        console.log( config.Api.url + "gift?id=" + Cedula + "&name=" + Nombre
        + "&lastName=" + Apellido + "&email=" + Correo);
        setLoading1(true);
        try {
            const res = await fetch(
                config.Api.url + "gift?id=" + Cedula + "&name=" + Nombre
                + "&lastName=" + Apellido + "&email=" + Correo, requestOptions
            );
            const respuesta = await res.json()
            console.log(respuesta);
            respuesta.error ? setErr(true) : setRespuesta(respuesta.info);
            handleOpen();
            setLoading1(false);
        } catch (error) {
            setErr(true);
            setLoading1(false);
            console.log("respuest222a");
        }
    };

    return (
        <div className='contenedorLogin'>
            <div className='elemento'>
                {
                    loading1 ?
                        <Cargando />
                        :
                        !err ?
                            <Box sx={{ textAlign: 'center', padding: 1 }}>
                                <Button size='small' variant='text' onClick={back} endIcon={<ArrowBackIosIcon />}>
                                </Button>
                                <Typography variant='h6' component='h2'>
                                    Formulario
                                </Typography>
                                <Box
                                    component='form'
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete='off'
                                >
                                    <TextField
                                        onChange={onNombreChange}
                                        noValidate
                                        required
                                        id='Nombre'
                                        label='Nombres'
                                    />
                                    <TextField
                                        onChange={onApellidoChange}
                                        noValidate
                                        required
                                        id='Apellido'
                                        label='Apellidos'
                                    />

                                    <TextField
                                        onChange={onCedulaChange}
                                        noValidate
                                        required
                                        id='Cédula'
                                        label='Cédula'
                                        type='number'
                                    />
                                    <TextField
                                        onChange={onCorreoChange}
                                        noValidate
                                        required
                                        id='Correo'
                                        label='Correo'
                                    />
                                    <Button sx={{ marginBlockEnd: '3px' }} variant='contained' onClick={GuardarFormulario} >
                                        Enviar
                                    </Button>
                                </Box>
                                <Modal
                                    open={open}
                                    onClose={handleClose2}
                                    aria-labelledby='modal-modal-title'
                                    aria-describedby='modal-modal-description'
                                >
                                    <Box sx={style}>
                                        <Typography id='modal-modal-title' variant='h6' component='h2'>
                                            Formulario Exitoso
                                        </Typography>
                                        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                                            {Respuesta}
                                        </Typography>
                                        <Button sx={{ color: 'gray', textDecoration: 'underline', textTransform: 'capitalize' }} variant='text' href='/home'>
                                            Cerrar
                                        </Button>
                                    </Box>
                                </Modal>
                            </Box>
                            :
                            <Container>
                                <Box sx={styleP}>
                                    <Modal
                                        open={open}
                                        onClose={handleClose2}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                ERROR
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                EL USUARIO YA HA SOLICITADO BONO
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
        </div>


    );
}

export default Formulario
