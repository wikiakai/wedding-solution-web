import { Box, Container, Stack } from '@mui/material'
import React from 'react'

import gallery1 from '../../assets/img/gallery1.svg'
import gallery2 from '../../assets/img/gallery2.svg'
import gallery3 from '../../assets/img/gallery3.svg'
import gallery4 from '../../assets/img/gallery4.svg'

const Gallery = () => {
  return (
    <Stack
      direction={{ xs: 'row', sm: 'row', md: 'row', lg: 'row' }}
      justifyContent={{
        xs: 'space-evenly',
        sm: 'space-evenly',
        md: 'space-between',
        lg: 'space-between',
      }}
      alignItems="center"
      sx={{
        px: '10px',
        pb: '80px',
        flexWrap: 'wrap',
        gap: '5px',
      }}
    >
      <Box
        sx={{
          width: { xs: '220px', md: '400px' },
          height: { xs: '310px' },
        }}
      >
        <img
          src={gallery1}
          alt="gallery1"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px',
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '220px', md: '400px' },
          height: { xs: '310px' },
        }}
      >
        <img
          src={gallery2}
          alt="gallery2"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '70% 0',
            borderRadius: '20px',
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '220px', md: '400px' },
          height: { xs: '310px' },
        }}
      >
        <img
          src={gallery3}
          alt="gallery3"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 0',
            borderRadius: '20px',
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '220px', md: '400px' },
          height: { xs: '310px' },
        }}
      >
        <img
          src={gallery4}
          alt="gallery4"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px',

            objectPosition: '60% 0',
          }}
        />
      </Box>
    </Stack>
  )
}

export default Gallery
