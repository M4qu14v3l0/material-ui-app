// imports
import { Grid , CardMedia } from "@mui/material";
import Description from "./Description";
import FirstInformation from "./FirstInformation";

export default function Profile({dataUser}){

    return(
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <CardMedia component='img' image={dataUser.avatar_url} alt='GitHub User'/>
                </Grid>
                <Grid item xs={9}>
                    <FirstInformation {...dataUser}/>
                    <Description {...dataUser}/>
                </Grid>
            </Grid>
        </div>
    )
}