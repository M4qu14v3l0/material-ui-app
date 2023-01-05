import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PaperInformation from "./PaperInformation";

export default function FirstInformation(dataUser){
    
    return(
        <>
            <Stack>
                <Typography>{dataUser.name}</Typography>
                <Typography>{dataUser.created_at}</Typography>
            </Stack>
            <PaperInformation {...dataUser}/>
        </>
    )
}