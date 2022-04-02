import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function FunBasicModal() {

    return (
        <div>
            <Modal
                open={true}
                onClose={false}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        ¡Error al leer el código de barras!
                    </Typography>
                    <Typography id='modal-modal-description'>
                        Intenta nuevamente
                    </Typography>
                    <Button variant='contained' href='/barcode'>
                        Escanear
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
