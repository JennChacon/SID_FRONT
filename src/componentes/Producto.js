import * as React from 'react';
import { Box, Button, CardActions, IconButton, Input, Modal } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SliderProducts from './SliderProducts';
import Rating from '@mui/material/Rating';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { styled } from '@mui/material/styles';
import { Avatar, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';

const Producto = ({ datos }) => {
    const [open, setOpen] = React.useState(false);
    const [Favorito, setFavorito] = React.useState(false);
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
    const back = () => {
        window.history.back();
    }
    const Input = styled('input')({
        display: 'none',
    });
    const FavoritoClick = () => {
        if (Favorito) {
            setFavorito(false);
        } else {
            setFavorito(true);
        }
    }
    return (
        <div>
            <Card sx={{ maxWidth: 500, margin: '0px' }}>
                <CardActionArea>
                    <Button size='small' variant='text' onClick={back} endIcon={<ArrowBackIosIcon />}>
                    </Button>
                    {datos.DescripcionCorta}
                </CardActionArea>
                <CardActionArea sx={{ marginTop: '15px', marginLeft: '15px' }}>
                    {datos.Tienda}
                </CardActionArea>
                <CardHeader subheader={`$ ${datos.Precio}`} title={datos.Nombre} />
                <CardMedia sx={{ borderTop: 2, borderColor: '#d2d2d2' }}
                    component='img'
                    width='240'
                    image={datos.Imagen}
                    alt={datos.Nombre}
                />
                <CardActions className="Me-Gusta" disableSpacing >
                    <label htmlFor='icon-button-file'>
                        <Input id='icon-button-file' onClick={FavoritoClick} />
                        <IconButton color='primary' aria-label='upload picture' component='span'>
                            <ThumbUpOffAltIcon />
                        </IconButton>
                    </label>
                </CardActions>
                <CardActions className="No-Me-Gusta" disableSpacing>
                    <label htmlFor='icon-button-file2'>
                        <Input id='icon-button-file2' onClick={FavoritoClick} />
                        <IconButton color='primary' aria-label='upload picture' component='span'>
                            <ThumbDownOffAltIcon />
                        </IconButton>
                    </label>
                </CardActions>
                <CardContent >
                    {datos.Descripcion.map(ele => {
                        if (ele) {
                            return <div>
                                <Typography variant='subtitle1'>
                                    {ele}
                                </Typography>
                            </div>
                        }
                    })}
                    <br></br>
                    <Typography>
                        {datos.Talla}
                    </Typography>
                    <a href={`/Api/${datos.Ean}`}>
                        <img className='estiloImgColorSeleccionada' src={datos.ImgTalla}></img>
                    </a>
                    <a href={`/Api/${datos.Ean}`}>
                        <img className='estiloImgColor' src='https://www.gef.co/dx/api/dam/custom/crystalco_cat_as/gef/es-co/imagenes/swatches/swatches_tallas/negros/adultos/adulto_s.png'></img>
                    </a>
                    <Typography>
                        {datos.Composicion}
                    </Typography>
                    <Typography>
                        {datos.Color}
                    </Typography>
                    <a href={`/Api/${datos.Ean}`}>
                        <img className='estiloImgColorSeleccionada' src={datos.ImgColor}></img>
                    </a>
                    <a href={`/Api/7703081912110`}>
                        <img className='estiloImgColor' src='https://www.gef.co/dx/api/dam/custom/crystalco_cat_as/gef/es-co/imagenes/swatches/swatches_genericos/terracota-42029.png'></img>
                    </a>
                    <a href={`/Api/${datos.Ean}`}>
                        <img className='estiloImgColor' src={datos.ImgColor}></img>
                    </a>
                    <a href={`/Api/${datos.Ean}`}>
                        <img className='estiloImgColor' src={datos.ImgColor}></img>
                    </a>
                    <Typography >
                        Código del artículo: {datos.Ean}
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }}>
                        <a href='/Map'>
                            Ver ubicación de la prenda
                        </a>
                    </Typography>
                    <Button variant='text' target={'_blank'} href={datos.Url} endIcon={<ArrowRightAltIcon />}>
                        Ir al ecommerce
                    </Button>
                    <Button sx={{ marginBlockEnd: '5px', textAlign: 'center' }} variant='contained' href='/barcode'>
                        Escanear otra prenda
                    </Button>
                    <hr></hr>
                    <SliderProducts ean={datos.Ean} />
                </CardContent>
            </Card>
            <Modal
                open={open}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        ¡Tu opinión es importante!
                    </Typography>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        <Rating name='half-rating' precision={0.5} size='large' />
                    </Typography>
                    <Button variant='contained' onClick={handleClose}>
                        Enviar
                    </Button>
                    <br></br>
                    <Button sx={{ color: 'gray', textDecoration: 'underline', textTransform: 'capitalize' }} variant='text' onClick={handleClose}>
                        Cerrar
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Producto
