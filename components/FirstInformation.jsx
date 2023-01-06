import { Typography } from '@mui/material'
import { Stack } from '@mui/system'

export default function FirstInformation (dataUser) {
  const stackContainer = {
    justifyContent: 'space-between',
    alignContent: 'center'
  }

  return (
    <>
      <Stack direction='row' alignItems='center' sx={stackContainer}>
        <Typography variant='h4'>{dataUser.name}</Typography>
        <Typography variant='subtitle2'>{dataUser.created_at}</Typography>
      </Stack>
      <Typography variant='caption'>{`@${dataUser.login}`}</Typography>
    </>
  )
}
