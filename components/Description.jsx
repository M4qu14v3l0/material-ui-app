import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import LocationInformation from "./LocationInformation";
import PaperInformation from "./PaperInformation";

export default function Description({dataUser}){


    return(
        <>
            <Stack justifyContent='center'>
                <Typography variant="body1">
                {
                    !dataUser.bio ? "Lorem Ipsum" : dataUser.bio
                }
                </Typography>
            </Stack>
            <PaperInformation {...dataUser}/>
            <LocationInformation {...dataUser} />
        </>
    )
}