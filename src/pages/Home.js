import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Stack } from '@mui/material';
import image from '../static/img/inicio.jpg';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
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
    const Cerrar = () => {
        return (
            window.location.href = `/home`
        )
    }
    return (
        <div>
            <Box sx={style}>                
                <Box sx={{ marginTop: '10px' }}>
                    <img style={{ borderRadius: '20px' }} width={283} src={`${image}`} />
                </Box>
                <Typography sx={{ marginTop: '10px' }} id='modal-modal-title' variant='h6' component='h2'>
                    Escanear código de barras
                </Typography>
                <Typography sx={{ marginTop: '10px' }} id='modal-modal-description'>
                    Escanea el código de barras de la prenda que desees
                </Typography>
                <Button sx={{ marginBlockEnd: '3px' }} variant='contained' href='/barcode'>
                    Escanear
                </Button>
            </Box>
        </div>
    );
}
export default Home