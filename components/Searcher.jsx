//De MUI
import { IconButton, Stack, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

//De React
import { useState } from "react";

//Estilos

const stack = {
    marginTop: '10px',
    width:'50%',
}   

const textField = {
    width: '90%',
}

const form = {

    width: '100%',
}

const iconButton = {
    left: '-50px'
}


export default function Searcher(){

    //Lógica

    const [search , setSearch] = useState('octocat')

    const onSearch = ({target}) => {
        setSearch(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(search)
    } 

    return(

        <Stack sx={stack}>
            <form onSubmit={ onSubmit } className={form.className}>
                <TextField sx={textField} id="outlined-basic" label="GitHub User" variant="outlined" placeholder="Buscar usuario" size="small" value={search} onChange={onSearch}/>          
                <IconButton sx={iconButton} onClick={ onSubmit }>
                    <SearchIcon/>
                </IconButton>     
            </form>
        </Stack>
    )
}