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
          direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
          spacing={2}
          justifyContent="center"
        >
          {navbarItems.map((i) => (
            <Typography variant="body1" cursor={'pointer'}>
              {i}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

export default Footer
