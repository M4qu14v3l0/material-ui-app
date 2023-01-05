import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function FirstInformation({name , login , created_at}){
    
    return(
        <>
            <Stack>
                <Typography>{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
        </>
    )
}