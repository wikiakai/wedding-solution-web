import React from 'react'
import { Typography, styled, Box, Stack, Button } from '@mui/material'

import hero from '../../assets/img/hero.svg'
import logo from '../../assets/img/logo.svg'

// Styling component
const HeroImg = styled('div')({
  backgroundImage: `url(${hero})`,
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  // filter: "brightness(40%)",
})

const HomeTitle = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '38px',
})

const Navbar = styled('div')({
  marginTop: '22px',
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(217, 217, 217, 0.35)',
})

const CtaContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '72px',
})

const CtaText = styled(Typography)({
  fontFamily: 'Send Flowers',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '60px',
  lineHeight: '80px',
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: '32px',
})

const CtaButton = styled(Button)({
  backgroundColor: '#B09D59',
  padding: '10px 38px',
  color: '#FFFFFF',
  fontSize: '20px',
  '&:hover': {
    backgroundColor: '#383838',
    color: '#B09D59',
    boxShadow: 'none',
  },
})
const Home = () => {
  const navbarItems = [
    'HOME',
    'WEDDING',
    'OUR STORY',
    'OUR GALLERY',
    'BLOG',
    'CONTACT US',
  ]
  return (
    <HeroImg>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <HomeTitle variant="home">EVENT</HomeTitle>
        <img src={logo} width="100px" alt="logo" />
        <HomeTitle variant="home">SOLUTION</HomeTitle>
      </Stack>
      <Navbar>
        <Stack direction={'row'} spacing={5}>
          {navbarItems.map((i) => (
            <Typography variant="navbar" cursor={'pointer'}>
              {i}
            </Typography>
          ))}
        </Stack>
      </Navbar>

      <CtaContainer>
        <Box
          sx={{
            display: 'flex',
            width: '25%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CtaText>We’ll make your happy moment unforgettable</CtaText>
          <CtaButton variant="contained">LEARN MORE</CtaButton>
        </Box>
      </CtaContainer>
    </HeroImg>
  )
}

export default Home
