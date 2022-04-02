import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CircularProgress } from '@mui/material';
import { grey } from '@mui/material/colors';

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

export default function Cargando() {
  
  return (
    <div>
      <Modal
        open={true}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Cargando...
          </Typography>
          <Typography id='modal-modal-description'>
            <Box sx={{
              display: 'flex',
              position: 'absolute',
              top: '55%',
              left: '40%',
              marginTop: '-17px',
              marginLeft: '-15px',
            }}>
              <CircularProgress size={75} sx={{
                color: grey[800]
              }} />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
