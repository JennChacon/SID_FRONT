import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import config from '../config.json';
import { Avatar, Button, Card, CardActionArea, CardHeader, Container, Rating, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const MisFavoritos = () => {
    const { ocasion } = useParams();
    const [loading1, setLoading1] = React.useState(true)
    const [productos, setproductos] = React.useState([])
    const [err, setErr] = React.useState(false);

    React.useEffect(() => {
        setLoading1(true)
        const fetchEmple = async () => {
          try {
            const res = await fetch(
              config.Api.url + "product/ocassionType/" + ocasion
            );
            const respuesta = await res.json()
            console.log(respuesta);
            setproductos(respuesta.info);
            setLoading1(false)
          } catch (error) {
            setErr(true)
            setLoading1(false)
            console.log("respuesta");
          }
        };
    
        fetchEmple();
      }, []);
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
                {productos.map((item) => (
                    <a style={styleA} href={`/Api/${item.product.ean}`} >
                        <ImageListItem key={item.image} sx={{ width: 145}}>
                            <img
                                src={item.image}
                                srcSet={item.image}
                                loading='lazy'
                            />
                            <ImageListItemBar
                                title={`${item.product.nameReference} ${item.product.color.name} ${item.product.size.name}`}
                                subtitle={<span>$ {item.product.price} </span>}
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
