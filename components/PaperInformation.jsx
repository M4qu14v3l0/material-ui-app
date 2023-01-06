/* eslint-disable camelcase */

import { Paper, Stack, Typography } from '@mui/material'

export default function PaperInformation ({ public_repos, followers, following }) {
  const stackContainer = {
    margin: '20px'
  }

  return (
    <>
      <Paper elevation={3}>
        <Stack spacing={3} direction='row' justifyContent='space-evenly' sx={stackContainer}>
          <Stack>
            <Typography variant='h5'>Repositorios</Typography>
            <Typography variant='h6'>{public_repos}</Typography>
          </Stack>
          <Stack>
            <Typography variant='h5'>Seguidores</Typography>
            <Typography variant='h6'>{followers}</Typography>
          </Stack>
          <Stack>
            <Typography variant='h5'>Seguidos</Typography>
            <Typography variant='h6'>{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  )
}
