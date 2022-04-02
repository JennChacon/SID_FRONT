import * as React from 'react';
import { Box, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Formulario = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    const [values, setValues] = React.useState({
        amount: '',
        password1: '',
        password2: '',
        weight: '',
        weightRange: '',
        showPassword1: false,
        showPassword2: false,
    });

    const handleChange1 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleChange2 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword1 = () => {
        setValues({
            ...values,
            showPassword1: !values.showPassword1,
        });
    };

    const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword2 = () => {
        setValues({
            ...values,
            showPassword2: !values.showPassword2,
        });
    };

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };
    const back = () => {
        window.history.back();
    }
    return (
        <div className='contenedorLogin'>
            <div className='elemento'>
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
                            noValidate
                            required
                            id='Nombre'
                            label='Nombres'
                        />
                        <TextField
                            noValidate
                            required
                            id='Apellido'
                            label='Apellidos'
                        />
                        
                        <TextField
                            noValidate
                            required
                            id='Cédula'
                            label='Cédula'
                            type='number'
                        />
                        <TextField
                            noValidate
                            required
                            id='Correo'
                            label='Correo'
                        />
                        <Button sx={{ marginBlockEnd: '3px' }} variant='contained' onClick={handleOpen} >
                            Enviar
                        </Button>
                    </Box>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='modal-modal-title'
                        aria-describedby='modal-modal-description'
                    >
                        <Box sx={style}>
                            <Typography id='modal-modal-title' variant='h6' component='h2'>
                                Formulario Exitoso
                            </Typography>
                            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                                Te enviamos un correo con el código de descuento
                            </Typography>
                            <Button sx={{ color: 'gray', textDecoration: 'underline', textTransform: 'capitalize' }} variant='text' href='/home'>
                                Cerrar
                            </Button>
                        </Box>
                    </Modal>
                </Box>

            </div>
        </div>


    );
}

export default Formulario
