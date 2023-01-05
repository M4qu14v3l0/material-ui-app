import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function Description({bio}){
    return(
        <>
            <Stack>
                <Typography>
                {
                    !bio ? "Lorem Ipsum" : bio
                }
                </Typography>
            </Stack>
            
        </>
    )
}