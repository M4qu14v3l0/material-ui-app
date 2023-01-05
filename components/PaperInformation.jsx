import { Paper , Stack , Typography} from "@mui/material"

export default function PaperInformation({public_repos , followers , following}){
    return(
        <>
            <Paper elevation={3}>
                <Stack>
                    <Stack>
                        <Typography>Repositorios</Typography>
                        <Typography>{public_repos}</Typography>
                    </Stack>
                    <Stack>
                        <Typography>Seguidores</Typography>
                        <Typography>{followers}</Typography>
                    </Stack>
                    <Stack>
                        <Typography>Seguidos</Typography>
                        <Typography>{following}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </>
    )
}