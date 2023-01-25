import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/logo.svg'
import { Container } from '@mui/system'

const Footer = () => {
  const navbarItems = [
    'HOME',
    'WEDDING',
    'OUR STORY',
    'OUR GALLERY',
    'BLOG',
    'CONTACT US',
  ]

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          py: '50px',
          gap: '30px',
        }}
      >
        <img src={logo} width={'90px'} alt="logo" />
        <Typography variant="home" color={'black'}>
          EVENT SOLUTION
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: 'wrap', gap: '20px' }}
        >
          {navbarItems.map((i) => (
            <Typography variant="body1" cursor={'pointer'}>
              {i}
            </Typography>
          ))}
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography variant="body1">
            Designed by
            <a
              href="https://www.instagram.com/agengari/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Ageng Ari Nugroho
            </a>
          </Typography>
          <Typography variant="body1">
            Develop by
            <a
              href="https://www.instagram.com/wikiakai/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              wikiakai
            </a>
          </Typography>
        </Stack>
      </Box>
    </Container>
  )
}

export default Footer
