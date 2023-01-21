import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/logo.svg'

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
    <Box
      sx={{
        px: '280px',
        height: '100%',
        pt: '80px',
      }}
    >
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
        <Stack direction={'row'} spacing={10}>
          {navbarItems.map((i) => (
            <Typography variant="body1" cursor={'pointer'}>
              {i}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
