import * as React from 'react';
import { Box, Button, CardActions, Grid, IconButton, Input, Modal } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SliderProducts from './SliderProducts';
import ImagenProducto from './ImagenProducto';
import Rating from '@mui/material/Rating';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import tallaS from '../static/img/adultos_S.png';
import tallaL from '../static/img/adultos_L.png';
import tallaM from '../static/img/adultos_M.png';
import tallaXL from '../static/img/adultos_XL.png';
import config from '../config.json';

const Producto = ({ datos }) => {
    const [open, setOpen] = React.useState(false);
    const [Favorito, setFavorito] = React.useState(false);
    const [NoFavorito, setNoFavorito] = React.useState(false);
    const [err, setErr] = React.useState(false);
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

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch PUT Request Example' })
    };

    const fetchMeGusta = async () => {
        console.log('megusta');
        try {
            const res = await fetch(
                config.Api.url + "product/qualification/" + datos.Calificacion + "/0", requestOptions
            );
            const respuesta = await res.json()
            setFavorito(true);
            setNoFavorito(false);
            console.log(respuesta.info)
        } catch (error) {
            setErr(true)
        }
    };

    const fetchNoMeGusta = async () => {
        console.log('megusta')
        try {
            const res = await fetch(
                config.Api.url + "product/qualification/" + datos.Calificacion + "/1", requestOptions
            );
            const respuesta = await res.json()
            setFavorito(false);
            setNoFavorito(true);
            console.log(respuesta.info)
        } catch (error) {
            setErr(true)
        }
    };
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
                <ImagenProducto imagenes={datos.Imagen} />
                <CardActions className="Me-Gusta" disableSpacing >
                    {
                        Favorito ?
                            <Button sx={{ marginBlockEnd: '3px' }} variant='contained' onClick={fetchMeGusta} startIcon={<ThumbUpIcon fontSize="large" />} >
                            </Button>
                            :
                            <Button sx={{ marginBlockEnd: '3px' }} variant='contained' onClick={fetchMeGusta} startIcon={<ThumbUpOffAltIcon fontSize="large" />} >
                            </Button>
                    }
                </CardActions>
                <CardActions className="No-Me-Gusta" disableSpacing>
                {
                        NoFavorito ?
                            <Button sx={{ marginBlockEnd: '3px' }} variant='contained' onClick={fetchNoMeGusta} startIcon={<ThumbDownAltIcon fontSize="large" />} >
                            </Button>
                            :
                            <Button sx={{ marginBlockEnd: '3px' }} variant='contained' onClick={fetchNoMeGusta} startIcon={<ThumbDownOffAltIcon fontSize="large" />} >
                            </Button>
                    }
                </CardActions>
                <CardContent >
                    {datos.Descripcion}
                    <br></br>
                    <br></br>
                    <Typography>
                        Talla: {datos.Talla}
                    </Typography>
                    {datos.Tallas.map(ele => {
                        if (ele.name === 'S') {
                            if (datos.Talla === 'S') {
                                return <img className='estiloImgTallaSeleccionada' src={tallaS}></img>
                            } else {
                                return <img className='estiloImgTalla' src={tallaS}></img>
                            }
                        } else {
                            if (ele.name === 'L') {
                                if (datos.Talla === 'L') {
                                    return <img className='estiloImgTallaSeleccionada' src={tallaL}></img>
                                } else {
                                    return <img className='estiloImgTalla' src={tallaL}></img>
                                }
                            } else {
                                if (ele.name === 'M') {
                                    if (datos.Talla === 'M') {
                                        return <img className='estiloImgTallaSeleccionada' src={tallaM}></img>
                                    } else {
                                        return <img className='estiloImgTalla' src={tallaM}></img>
                                    }
                                } else {
                                    if (datos.Talla === 'XL') {
                                        return <img className='estiloImgTallaSeleccionada' src={tallaXL}></img>
                                    } else {
                                        return <img className='estiloImgTalla' src={tallaXL}></img>
                                    }
                                }
                            }
                        }
                    })}
                    <Typography>
                        {datos.Composicion}
                    </Typography>
                    <Typography>
                        Color: {datos.Color}
                    </Typography>
                    <Grid container>
                        {datos.Colores.map(ele => {
                            if (datos.Color == ele.name) {
                                return <div className='estiloImgColorSeleccionada'>
                                    <div className='estiloImgColorBorder'>
                                        <CircleIcon sx={{ color: ele.palette }} />
                                    </div>
                                </div>
                            } else {
                                return <div className='estiloImgColor'>
                                    <CircleIcon sx={{ color: ele.palette }} />
                                </div>
                            }
                        })}
                    </Grid>
                    <br></br>
                    <Typography >
                        Código del artículo: {datos.Ean}
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }}>
                        <a href={`/Map/${datos.Ean}`}>
                            Ver ubicación de la prenda
                        </a>
                    </Typography>
                    <Button sx={{ marginBlockEnd: '5px', textAlign: 'center' }} variant='contained' href='/barcode'>
                        Escanear otra prenda
                    </Button>
                    <hr></hr>
                    <SliderProducts ocasion={datos.Ocasion} />
                </CardContent>
            </Card>
        </div>
    );
}

export default Producto
