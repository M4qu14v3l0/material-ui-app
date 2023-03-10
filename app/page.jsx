// use client es necesario para que corra next 13 para parte del cliente
'use client'

import { Container } from '@mui/material'

import Searcher from '../components/Searcher'
import Profile from '../components/Profile'

import { useEffect, useState } from 'react'
import { getGitHubUser } from '../services/users'
import NotFound from '../components/NotFound'
// Estilos de toda la página principal

const container = {
  background: '#dafff6',
  width: '80vw',
  height: '80vh',
  borderRadius: '16px',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'rgb(0, 107, 108)'
}

export default function Page () {
  // lógica

  // búsquedas en el input
  const [search, setSearch] = useState('octocat')
  // hacer la búsqueda
  const [profileSearch, setProfileSearch] = useState(search)
  // búsqueda no encontrada
  const [notFound, setNotFound] = useState(false)
  // data del perfil
  const [dataUser, setDataUser] = useState({})

  // Escuchamos algún cambio para nueva búsqueda
  useEffect(() => {
    gettinUser(profileSearch)
  }, [profileSearch])

  // Realizamos la búsqueda
  const gettinUser = async (user) => {
    const response = await getGitHubUser(user)
    console.log(response)
    try {
      setDataUser(response)
    } catch (error) {
      console.log('perfil no encontrado')
      setNotFound(true)
    }
  }
  return (
    <Container sx={container}>

      <h1>Busca un Perfil</h1>
      <Searcher search={search} setSearch={setSearch} setProfileSearch={setProfileSearch} />
      {
                !notFound ? <Profile dataUser={dataUser} /> : <NotFound />
            }

    </Container>
  )
}
