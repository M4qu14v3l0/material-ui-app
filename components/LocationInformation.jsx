import { colors, Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

export default function LocationInformation({location , twitter_username , blog , company}){


    const gridContainer = {
        marginTop : '15px' 
    }

    const aLink = {
        textDecoration : 'none',
        color: 'red'
    }

    return(
        <Grid container spacing={2} sx={gridContainer}>
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <LocationOnIcon />
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <TwitterIcon />
                    <Typography>
                        {!twitter_username ? "Not Available" : `@${twitter_username}`}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <LanguageIcon />
                    <Typography>
                        {!blog ? "Not Available" : <a sx={aLink} target='_blank' href={blog}>{blog}</a>}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <BusinessIcon />
                    <Typography>
                        {!company ? "Not Available" : company}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
} 