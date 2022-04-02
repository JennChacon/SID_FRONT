import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Avatar, Button, Card, CardActionArea, CardHeader, Container, Rating, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const MisFavoritos = () => {
    const { ean } = useParams();
    const pro = [
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujeres/camisas/livis/1000x1263/camisa-mujer-adulta-livis-blanco-rayas-40194-frente-gef.jpg',
            'descripcion': 'CAMISA LIVIS BLANCO RAYAS L',
            'precio': '29.900',
            'ean': '7703081904696',
            'calificacion': 2.5,
            'url': 'https://www.gef.co/727584-040194'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujer_adulta/camisas/livis/1000x1263/camisa-mujer-adulta-livis-blanco-900-frente-gef.jpg',
            'descripcion': 'CAMISA LIVIS BLANCA L',
            'precio': '89.900',
            'ean': '7703081904726',
            'calificacion': 3.5,
            'url': 'https://www.gef.co/727584-000900'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujeres/camisas/letit/1000x1263/camisa-mujer-letit-negro-estampado-9277-frente-gef.jpg',
            'descripcion': 'CAMISA LETIT NEGRO ESTAMPADO M',
            'precio': '64.990',
            'ean': '7703081912103',
            'calificacion': 5,
            'url': 'https://www.gef.co/727425-009277'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2021/gef/es-co/imagenes/mujer_adulta/camisas/elilena/1000x1263/camisa-mujer-adulta-elilena-blanco-estampado-39690-frente-gef.jpg',
            'descripcion': 'CAMISA ELILENA BLANCO ESTAMPADO S',
            'precio': '89.900',
            'ean': '7703081745626',
            'calificacion': 4,
            'url': 'https://www.gef.co/camisa-mujer-elilena-711556-039690'
        },
    ]

    const styleA = {
        textDecoration: 'none',
        color: 'black',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        fontWeight: 'bold'
    }
    const back = () => {
        window.history.back();
    }
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <Button size='small' variant='text' onClick={back} endIcon={<ArrowBackIosIcon />}>
                </Button>
            </CardActionArea>
            <Typography variant='h6' component='h2'>
                Prendas relacionadas
            </Typography>
            <ImageList sx={{ width: 300, height: 450 }}>
                {pro.map((item) => (
                    <a style={styleA} href={`/Api/${item.ean}`} >
                        <ImageListItem key={item.img} sx={{ width: 145}}>
                            <img
                                src={item.img}
                                srcSet={item.img}
                                alt={item.id}
                                loading='lazy'
                            />
                            <ImageListItemBar
                                title={item.descripcion}
                                subtitle={<span>$ {item.precio} <br></br>
                                    <Rating name='size-small' defaultValue={item.calificacion} precision={0.5} sx={{ fontSize: '0.9rem' }} readOnly />
                                </span>}
                                position='below'
                            />

                        </ImageListItem>
                    </a>

                ))}
            </ImageList>
        </Card>

    );
}
export default MisFavoritos
