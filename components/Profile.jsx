// imports
import { Grid, CardMedia } from '@mui/material'
import { Stack } from '@mui/system'
import Description from './Description'
import FirstInformation from './FirstInformation'

export default function Profile ({ dataUser }) {
  const gridContainer = {
    marginTop: '15px'
  }

  const cardImage = {
    borderRadius: '50%',
    marginLeft: '10px'
  }

  const stackContainerInfo = {
    margin: '30px'
  }

  return (
    <div>
      <Grid container spacing={2} sx={gridContainer}>
        <Grid item xs={3}>
          <CardMedia component='img' image={dataUser.avatar_url} alt='GitHub User' sx={cardImage} />
        </Grid>
        <Grid item xs={9}>
          <Stack direction='column' spacing={1} sx={stackContainerInfo}>
            <FirstInformation {...dataUser} />
            <Description dataUser={dataUser} />
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}
