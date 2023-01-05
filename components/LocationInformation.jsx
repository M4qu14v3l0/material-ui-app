import { Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

export default function LocationInformation({location , twitter_username , blog , company}){
    return(
        <Grid container>
            <Grid item xs={6}>
                <Stack>
                    <LocationOnIcon />
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <TwitterIcon />
                    <Typography>
                        {!twitter_username ? "Not Available" : `@${twitter_username}`}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <LanguageIcon />
                    <Typography>
                        {!blog ? "Not Available" : blog}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <BusinessIcon />
                    <Typography>
                        {!company ? "Not Available" : company}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
} 