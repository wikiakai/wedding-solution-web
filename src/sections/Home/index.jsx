import React from 'react'
import {
  Typography,
  styled,
  Box,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import hero from '../../assets/img/hero.svg'
import logo from '../../assets/img/logo.svg'

// Styling component
const HeroImg = styled('div')({
  backgroundImage: `url(${hero})`,
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '35% 40%',
  marginBottom: '80px',
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
  marginTop: '100px',
})

const CtaText = styled(Typography)({
  fontFamily: 'Send Flowers',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '80px',
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: '32px',
})

const CtaButton = styled(Button)({
  backgroundColor: '#B09D59',
  padding: {
    xs: '10px 28px',
    sm: '10px 28px',
    md: '10px 38px',
    lg: '10px 38px',
  },
  color: '#FFFFFF',
  fontSize: '20px',
  '&:hover': {
    backgroundColor: '#383838',
    color: '#B09D59',
    boxShadow: 'none',
  },
})
const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
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
      <Stack
        direction="row"
        justifyContent={{
          xs: 'space-between',
          sm: 'space-between',
          md: 'center',
        }}
        alignItems="center"
        padding={{ xs: '10px', sm: '10px' }}
      >
        <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="white"
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {navbarItems.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HomeTitle
            variant="homeMobile"
            sx={{
              fontSize: '25px',
            }}
          >
            EVENT SOLUTION
          </HomeTitle>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <HomeTitle variant="home">EVENT</HomeTitle>
        </Box>
        <Box
          sx={{
            width: { xs: '50px', sm: '70px', md: '80px', lg: '80px' },
          }}
        >
          <img
            src={logo}
            style={{
              width: '100%',
            }}
            alt="logo"
          />
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <HomeTitle variant="home">SOLUTION</HomeTitle>
        </Box>
      </Stack>
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
        }}
      >
        <Navbar>
          <Stack direction="row" spacing={5}>
            {navbarItems.map((i) => (
              <Typography variant="navbar" cursor={'pointer'}>
                {i}
              </Typography>
            ))}
          </Stack>
        </Navbar>
      </Box>

      <CtaContainer>
        <Box
          sx={{
            display: 'flex',
            width: '25%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '30px',
          }}
        >
          <CtaText
            fontSize={{ xs: '40px', sm: '40px', md: '50px', lg: '60px' }}
          >
            We’ll make your happy moment unforgettable
          </CtaText>
          <CtaButton variant="contained">LEARN MORE</CtaButton>
        </Box>
      </CtaContainer>
    </HeroImg>
  )
}

export default Home
