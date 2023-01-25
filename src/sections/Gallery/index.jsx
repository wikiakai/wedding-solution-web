import { Box, Stack } from '@mui/material'
import React from 'react'

import gallery1 from '../../assets/img/gallery1.svg'
import gallery2 from '../../assets/img/gallery2.svg'
import gallery3 from '../../assets/img/gallery3.svg'
import gallery4 from '../../assets/img/gallery4.svg'

const Gallery = () => {
  const imgArr = [gallery1, gallery2, gallery3, gallery4]

  return (
    <Stack
      direction={{ xs: 'row', sm: 'row', md: 'row', lg: 'row' }}
      justifyContent={{
        xs: 'space-evenly',
        sm: 'space-evenly',
        md: 'space-evenly',
        lg: 'space-between',
      }}
      alignItems="center"
      sx={{
        px: '10px',
        pb: '80px',
        flexWrap: 'wrap',
        gap: '15px',
      }}
    >
      {imgArr.map((img) => (
        <Box
          sx={{
            width: { xs: '200px', sm: '280px', md: '400px' },
            height: { xs: '370px', md: '400px' },
          }}
        >
          <img
            src={img}
            alt="img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </Box>
      ))}
    </Stack>
  )
}

export default Gallery
