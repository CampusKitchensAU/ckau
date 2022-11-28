import { useState } from 'react'

import { Box, useTheme } from '@mui/material'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

interface imageInfo {
  src: string
  caption: string
}

const SwipeableCarousel = ({ images }: { images: imageInfo[] }) => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState<number>(0)
  const maxSteps = images.length

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={(i: number) => {
          setActiveStep(i)
        }}
        enableMouseEvents
        interval={5000}
      >
        {images.map((img, idx) => (
          <div key={img.caption}>
            {Math.abs(activeStep - idx) <= 2 ? (
              <Box
                component="img"
                src={img.src}
                alt={img.caption}
                sx={{
                  height: 400,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  )
}

export default SwipeableCarousel
