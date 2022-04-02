import React, { useState } from 'react'
import Scanner from '../componentes/Scanner';
import '../static/css/styles.css';
import Container from '@mui/material/Container';
import { useParams,Redirect } from 'react-router-dom';

const LeerBarcode = () => {
    const [result, setResult] = useState('');

    const Detectar = (result) => {
        if (result) {
            setResult(result);
        }
    };

    return (
        <div>
            {
                result ?
                    <Redirect to={`/Api/${result}`} />
                    :
                    <Container className='App'>
                        <div className='container-princi'>
                            <div className='container-barcode'>
                                <Scanner onDetected={Detectar} />

                            </div>
                        </div>
                    </Container>
            }
        </div>
    );

}
export default LeerBarcode