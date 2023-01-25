import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

import emailIcon from '../../assets/img/emailIcon.svg'
import phoneIcon from '../../assets/img/phoneIcon.svg'
import addressIcon from '../../assets/img/addressIcon.svg'

const FooterCard = ({ icon, title, desc }) => {
  return (
    <Stack
      width={{ xs: '180px', sm: '200px', md: '400px' }}
      sx={{
        bgcolor: '#383838',
        paddingX: '20px',
        borderRadius: '20px',
        boxShadow: '4px 6px 6px 0px #00000040',
        minHeight: '230px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'row', sm: 'column', md: 'column' },
          backgroundColor: '#B09D59',
          padding: '25px',
          borderRadius: '50%',
          position: 'relative',
          bottom: '50px',
          width: { xs: '30px', sm: '45px', md: '60px' },
          height: { xs: '30px', sm: '45px', md: '60px' },
        }}
      >
        <img src={icon} alt="" width={'80%'} />
      </Box>
      <Box
        sx={{
          position: 'relative',
          bottom: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="servicesCardTitle" color={'white'}>
          {title}
        </Typography>
        <Typography variant="servicesCardDesc">{desc}</Typography>
      </Box>
    </Stack>
  )
}
const Contact = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: {
          xs: 'space-evenly',
          sm: 'space-evenly',
          md: 'center',
          lg: 'center',
        },
        alignItems: 'center',
        py: '50px',
        flexDirection: { xs: 'row', sm: 'row', md: 'row', lg: 'row' },
        flexWrap: { xs: 'wrap', sm: 'wrap', md: 'noWrap', lg: 'noWrap' },
        gap: '35px',
      }}
    >
      <FooterCard
        icon={addressIcon}
        title="Address"
        desc="Sleman, Yogyakarta, Indonesia"
      />
      <FooterCard icon={phoneIcon} title="Phone" desc="082212344321" />
      <FooterCard icon={emailIcon} title="Email" desc="wikiakai11@gmail.com" />
    </Container>
  )
}

export default Contact
