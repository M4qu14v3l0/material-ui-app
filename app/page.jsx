'use client'

import { Container } from "@mui/material";
import Searcher from "../components/Searcher";

const container = {
    background: '#dafff6',
    width: '80vw',
    height: '500px',
    borderRadius: '16px',
    marginTop:'40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color:'rgb(0, 107, 108)'
}

export default function Page(){
    return(
        <Container sx={container}>
            <div>
                <h1>Soy un contenedor</h1>
            </div>
            <Searcher />
        </Container>
    )
}

