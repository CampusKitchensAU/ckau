import { Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { routes, Link as RWLink } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import OperationsStepper from 'src/components/OperationsStepper/OperationsStepper'
import PageHeader from 'src/components/PageHeader/PageHeader'
import SwipeableCarousel from 'src/components/SwipeableCarousel/SwipeableCarousel'

interface imageInfo {
  src: string
  caption: string
}

interface stepInfo {
  title: string
  img: string
  description: string
}

const pickupImages: imageInfo[] = [
  { src: 'img/pickup/pickup1.jpg', caption: 'pickup in front of lupton' },
  { src: 'img/pickup/pickup2.JPEG', caption: 'pickup in front of lupton' },
  { src: 'img/pickup/pickup3.jpg', caption: 'pickup in front of lupton' },
  { src: 'img/pickup/pickup4.jpg', caption: 'pickup in front of lupton' },
  { src: 'img/pickup/pickup5.JPEG', caption: 'pickup in front of lupton' },
]

const operationSteps: stepInfo[] = [
  {
    title: 'Pickup',
    img: 'img/pickup/pickup1.jpg',
    description:
      'Visit a university dining hall to recover pans of unserved food.',
  },
  {
    title: 'Resourcing',
    img: 'img/resourcing/resourcing1.jpg',
    description: 'Select and thaw picked-up pans of food for packaging.',
  },
  {
    title: 'Packaging',
    img: 'img/packaging/packaging1.JPG',
    description:
      'Assemble nutritious meals from resourced food into individual portioned containers.',
  },
  {
    title: 'Recycling/Cleaning',
    img: 'img/cleaning/cleaning1.jpg',
    description:
      'Sweep floors, clean and sanitize kitchen equipment, surfaces, and refrigerators. Deliver cleaned pans to a recycling facility.',
  },
  {
    title: 'Delivering',
    img: 'img/delivering/delivery1.png',
    description:
      'Bring assembled meals and pans of food to individuals and community partners of Auburn/Opelika.',
  },
]

const HowItWorksPage = () => {
  const theme = useTheme()
  const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <MetaTags title="HowItWorks" description="HowItWorks page" />

      <PageHeader
        title="How It Works"
        description="CKAU logistics are continuously adapted and improved, but our premise remains the same; dontate safe, unserved food."
      />
      <Grid
        container
        columnSpacing={2}
        sx={{
          width: '100%',
          px: 8,
          py: 4,
          [theme.breakpoints.up('xl')]: { minHeight: 400, px: 20 },
        }}
      >
        {/** LEFT SIDE */}
        <Grid xs={5}>
          <Grid container rowGap={2}>
            <Grid xs={12}>
              <Typography variant="h6">
                Our dedicated{' '}
                <RWLink
                  to={routes.hungerFighters()}
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: 'inline-flex',
                      textDecoration: 'underline',
                      textDecorationColor: theme.palette.text.disabled,
                      '&:hover': {
                        textDecorationColor: theme.palette.text.primary,
                      },
                    }}
                  >
                    hunger fighters
                  </Typography>
                </RWLink>{' '}
                lead volunteers on a daily basis to donate safe, unserved food.
                This is possible through the{' '}
                <Link
                  href="https://www.feedingamerica.org/ways-to-give/corporate-and-foundations/product-partner/bill-emerson"
                  target="_blank"
                  rel="noopener"
                  underline="always"
                  color={theme.palette.text.primary}
                >
                  Bill Emerson Good Samaritan Food Donation Act of 1996
                </Link>
                , which protects commercially-prepared food donations to
                nonprofits from liability concerns. Every year, we have one
                executive team member who is ServSafe certified at the
                managerial level.
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="h6">
                We operate on a weekly cycle, with shifts that follow food from
                the dining hall to the table. These include pick-up, harvesting,
                resourcing, packaging, cleaning, recycling, and delivering. The
                basic steps are described below, with additional shifts on the
                side. *Non-traditional shifts; these are subject to change at
                any time.
              </Typography>
            </Grid>
          </Grid>
          {/** END LEFT SIDE */}
        </Grid>
        {/** RIGHT SIDE */}
        <Grid xs={7}>
          <OperationsStepper steps={operationSteps} />
        </Grid>
      </Grid>
    </>
  )
}

export default HowItWorksPage
