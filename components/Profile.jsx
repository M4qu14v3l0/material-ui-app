// imports
import { Container } from "@mui/material";

export default function Profile({login , name}){

    return(
        <div>
            <h1>{login}</h1>
            <p>{name}</p>

        </div>
    )
}