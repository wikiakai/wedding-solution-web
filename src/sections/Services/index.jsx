import { Container, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import cardIcon1 from '../../assets/img/cardIcon1.svg'
import cardIcon2 from '../../assets/img/cardIcon2.svg'
import cardIcon3 from '../../assets/img/cardIcon3.svg'

const ServicesCard = ({ icon, title }) => {
  return (
    <Stack
      direction="column"
      sx={{
        bgcolor: '#383838',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '4px 6px 6px 0px #00000040',
      }}
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <img src={icon} alt="" width={'90px'} />
      <Typography variant="servicesCardTitle">{title}</Typography>
      <Typography variant="servicesCardDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{' '}
      </Typography>
    </Stack>
  )
}

const Divider = styled('div')({
  width: '100%',
  height: '5px',
  backgroundColor: '#D9D9D959',
  boxShadow: '2px 4px 4px 0px #00000030',
})

const Services = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: '50px',
        flexDirection: 'column',
      }}
    >
      <Typography variant="sectionTitle">Our Services</Typography>
      <Stack
        direction={{ sm: 'column', md: 'row', lg: 'row' }}
        spacing={{ xs: 2, sm: 3, md: 5 }}
        mt={'40px'}
        mb={'80px'}
      >
        <ServicesCard icon={cardIcon1} title="Wedding Planing" />
        <ServicesCard icon={cardIcon2} title="Wedding Design" />
        <ServicesCard icon={cardIcon3} title="Wedding Menu" />
      </Stack>

      <Divider></Divider>
      <hr />
    </Container>
  )
}

export default Services
