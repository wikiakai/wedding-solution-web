import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

import emailIcon from '../../assets/img/emailIcon.svg'
import phoneIcon from '../../assets/img/phoneIcon.svg'
import addressIcon from '../../assets/img/addressIcon.svg'

const FooterCard = ({ icon, title, desc }) => {
  return (
    <Box
      sx={{
        bgcolor: '#383838',
        paddingX: '20px',
        borderRadius: '20px',
        boxShadow: '4px 6px 6px 0px #00000040',
        minWidth: '275px',
        minHeight: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#B09D59',
          padding: '30px',
          borderRadius: '50%',
          position: 'relative',
          bottom: '50px',
        }}
      >
        <img src={icon} alt="" width={'40px'} height={'40px'} />
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
    </Box>
  )
}
const Contact = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: '50px',
        flexDirection: 'row',
        gap: '20px',
      }}
    >
      {/* <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      > */}
      <FooterCard
        icon={addressIcon}
        title="Address"
        desc="Sleman, Yogyakarta, Indonesia"
      />
      <FooterCard icon={phoneIcon} title="Phone" desc="082212344321" />
      <FooterCard icon={emailIcon} title="Email" desc="wikiakai11@gmail.com" />
      {/* </Stack> */}
    </Container>
  )
}

export default Contact
