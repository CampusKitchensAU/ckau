import { useState } from 'react'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import {
  Paper,
  Typography,
  useTheme,
  MobileStepper,
  Button,
  Box,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

interface stepInfo {
  title: string
  img: string
  objectPosition: string
  description: string
}

const OperationsStepper = ({ steps }: { steps: stepInfo[] }) => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState<number>(0)
  const maxSteps = steps.length

  return (
    <Paper
      elevation={3}
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 3,
        border: 'solid 4px',
        borderColor: theme.palette.auburnBlue.main,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          bgcolor: theme.palette.auburnBlue.main,
          px: 2,
          py: 1,
          color: theme.palette.auburnBlue.contrastText,
        }}
      >
        {steps[activeStep].title}
      </Typography>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={(i: number) => {
          setActiveStep(i)
        }}
        enableMouseEvents
        interval={15000}
      >
        {steps.map((_step, idx) => (
          <div key={idx}></div>
        ))}
      </AutoPlaySwipeableViews>
      <Grid container flexGrow={1}>
        <Grid xs={12} sm={7} sx={{ p: 0 }}>
          <Box
            component="img"
            src={steps[activeStep].img}
            sx={{
              height: 412,
              display: 'block',
              overflow: 'hidden',
              width: '100%',
              objectFit: 'cover',
              objectPosition: steps[activeStep].objectPosition,
              [theme.breakpoints.down('md')]: { height: 300 },
              [theme.breakpoints.down(400)]: { height: 200 },
              [theme.breakpoints.up('xl')]: { height: 600 },
            }}
          />
        </Grid>
        <Grid
          xs={12}
          sm={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 4,
            [theme.breakpoints.down('sm')]: { minHeight: 125 },
            [theme.breakpoints.down(400)]: { minHeight: 150 },
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            {steps[activeStep].description}
          </Typography>
        </Grid>
      </Grid>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={() => {
              activeStep == maxSteps - 1
                ? setActiveStep(0)
                : setActiveStep(activeStep + 1)
            }}
            sx={{
              width: 200,
              bgcolor: theme.palette.auburnSecondaryBlue.main,
              borderRadius: 2,
              border: 'solid 2px',
              borderColor: theme.palette.auburnSecondaryBlue.main,
              fontWeight: 'bold',
              transition: 'ease 0.5s',
              '&:hover': {
                borderColor: theme.palette.auburnSecondaryBlue.main,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.auburnSecondaryBlue.main,
                transition: 'ease 0.5s',
              },
              [theme.breakpoints.down('sm')]: { width: 'auto' },
            }}
          >
            <Box sx={{ [theme.breakpoints.down('sm')]: { display: 'none' } }}>
              {activeStep == maxSteps - 1
                ? steps[0].title
                : steps[activeStep + 1].title}
            </Box>

            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={() => {
              activeStep == 0
                ? setActiveStep(maxSteps - 1)
                : setActiveStep(activeStep - 1)
            }}
            sx={{
              width: 200,
              bgcolor: theme.palette.auburnSecondaryBlue.main,
              borderRadius: 2,
              border: 'solid 2px',
              borderColor: theme.palette.auburnSecondaryBlue.main,
              fontWeight: 'bold',
              transition: 'ease 0.5s',
              '&:hover': {
                borderColor: theme.palette.auburnSecondaryBlue.main,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.auburnSecondaryBlue.main,
                transition: 'ease 0.5s',
              },
              [theme.breakpoints.down('sm')]: { width: 'auto' },
            }}
          >
            <KeyboardArrowLeft />
            <Box sx={{ [theme.breakpoints.down('sm')]: { display: 'none' } }}>
              {activeStep == 0
                ? steps[maxSteps - 1].title
                : steps[activeStep - 1].title}
            </Box>
          </Button>
        }
        sx={{
          '& .MuiMobileStepper-dot': {
            bgcolor: theme.palette.auburnOrange.light,
          },
          '& .MuiMobileStepper-dotActive': {
            bgcolor: theme.palette.auburnOrange.main,
          },
          bgcolor: theme.palette.auburnBlue.main,
        }}
      />
    </Paper>
  )
}

export default OperationsStepper
