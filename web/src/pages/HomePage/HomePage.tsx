import { AccessTime, Handshake, Restaurant, Scale } from '@mui/icons-material'
import {
  Button,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { routes, Link as RWLink } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedStat from 'src/components/AnimatedStat/AnimatedStat'

interface mainStat {
  icon: JSX.Element
  data: string
  title: string
}

const mainStats: mainStat[] = [
  {
    icon: <Scale sx={{ fontSize: '72px' }} />,
    data: '13,162+',
    title: 'Pounds of Food Recovered',
  },
  {
    icon: <Restaurant sx={{ fontSize: '72px' }} />,
    data: '10,213+',
    title: 'Meals Served',
  },
  {
    icon: <AccessTime sx={{ fontSize: '72px' }} />,
    data: '2,106+',
    title: 'Hours of Service',
  },
  {
    icon: <Handshake sx={{ fontSize: '72px' }} />,
    data: '20+',
    title: 'Community Parnters',
  },
]

const HomePage = () => {
  const theme = useTheme()
  const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/** Hero Section */}
      <Grid
        container
        rowGap={4}
        columnGap={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          px: 8,
          pb: 16,
          pt: 6,
          [theme.breakpoints.down('sm')]: { px: 4, rowGap: 2 },
          [theme.breakpoints.down('md')]: { pt: 0 },
          [theme.breakpoints.up('xl')]: {
            px: 80,
            minHeight: 850,
            flexDirection: 'column',
          },
          backgroundImage: `url(img/ExecTeam1.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          boxShadow: `inset 0 0 0 2000px rgba(0, 0, 0, 0.55)`,
        }}
      >
        <Grid xs={12} sm={8} sx={{ pt: 4 }}>
          <Typography
            variant="h1"
            sx={{
              color: theme.palette.auburnBlue.contrastText,
              textAlign: 'center',
              [theme.breakpoints.down('sm')]: { textAlign: 'center' },
              fontWeight: 'bold',
            }}
          >
            The Campus Kitchen at Auburn
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              color: theme.palette.auburnBlue.contrastText,
              fontWeight: 'bold',
            }}
          >
            &quot;Fighting{' '}
            <span style={{ color: theme.palette.auburnOrange.main }}>
              food waste
            </span>{' '}
            and{' '}
            <span style={{ color: theme.palette.auburnOrange.main }}>
              hunger
            </span>{' '}
            in the East Central Alabama community.&quot;
          </Typography>
        </Grid>
        <Grid xs={8} sm={3} xl={6}>
          <Button
            fullWidth
            sx={{
              bgcolor: theme.palette.auburnOrange.main,
              borderRadius: 4,
              border: 'solid 3px',
              borderColor: theme.palette.auburnOrange.main,
              fontWeight: 'bold',
              transition: 'ease 0.5s',
              '&:hover': {
                borderColor: theme.palette.auburnOrange.main,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.auburnOrange.main,
                transition: 'ease 0.5s',
              },
            }}
            size="large"
            href="https://alumniq.auburn.edu/giving/to/campuskitchens"
            target="_blank"
            rel="noopener"
          >
            Donate Now
          </Button>
        </Grid>
        <Grid xs={8} sm={3} xl={6}>
          <RWLink to={routes.howItWorks()} style={{ textDecoration: 'none' }}>
            <Button
              fullWidth
              sx={{
                bgcolor: theme.palette.auburnSecondaryBlue.main,
                borderRadius: 4,
                border: 'solid 3px',
                borderColor: theme.palette.auburnSecondaryBlue.main,
                fontWeight: 'bold',
                transition: 'ease 0.5s',
                '&:hover': {
                  borderColor: theme.palette.auburnSecondaryBlue.main,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.auburnSecondaryBlue.main,
                  transition: 'ease 0.5s',
                },
              }}
              size="large"
            >
              How It Works
            </Button>
          </RWLink>
        </Grid>
      </Grid>
      {/** Live Statistics */}
      <Paper
        sx={{
          bgcolor: theme.palette.primary.main,
          width: '80%',
          ml: 'auto',
          mr: 'auto',
          borderRadius: 8,
          mt: -8,
          border: 'solid 4px',
          borderColor: theme.palette.auburnBlue.main,
          [theme.breakpoints.down('md')]: {
            width: '85%',
          },
        }}
        elevation={4}
      >
        <Grid
          container
          rowGap={2}
          sx={{
            color: theme.palette.auburnBlue.main,
            px: 2,
            py: 2,
          }}
        >
          <Grid xs={12}>
            <Typography variant="h4" fontWeight="bold" textAlign="center">
              Fall 2022 Statistics
            </Typography>
          </Grid>
          {mainStats.map((stat: mainStat, idx: number) => {
            return (
              <Grid
                key={idx}
                xs={12}
                sm={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <AnimatedStat key={idx}>
                  {stat.icon}
                  <Typography
                    variant="h3"
                    color={theme.palette.auburnOrange.main}
                    fontWeight="bold"
                  >
                    {stat.data}
                  </Typography>
                  <Typography variant="h5" textAlign="center">
                    {stat.title}
                  </Typography>
                </AnimatedStat>
              </Grid>
            )
          })}
        </Grid>
      </Paper>
      {/** Welcome Statement */}
      <Grid
        container
        rowGap={2}
        columnSpacing={mobileMatch ? 0 : 3}
        sx={{
          width: '100%',
          px: 8,
          py: 4,
          [theme.breakpoints.down('sm')]: { px: 4, textAlign: 'center' },
          [theme.breakpoints.up('xl')]: { minHeight: 400, px: 20 },
        }}
      >
        <Grid xs={12}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Welcome to the Campus Kitchen!
          </Typography>
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography variant="h6">
            What once started out as a student&apos;s interest project for a
            class, today the Campus Kitchen at Auburn University is a{' '}
            <em>student-led 501(c)3 non-profit organization</em> located in the
            heart of Auburn&apos;s campus. We are a hunger solutions
            organization that has two main goals: recovering leftover food from
            on-campus dining halls and utilizing this food to help serve members
            of our community. <u>We fight food waste and hunger all at once!</u>
          </Typography>
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography variant="h6">
            The work that we do is truly a no-brainer. There is a desperate need
            for nutritional food in Auburn&apos;s community and the greater Lee
            County. Through our sponsorship as an organization by the Office of
            Public Service in University Outreach, we can put this work into
            action with our amazing team of volunteers. We are still part of a
            much bigger picture... CKAU has recovered{' '}
            <b>160,746+ pounds of food</b> and served <b>153,400+ meals</b> to
            members of both Auburn University and Lee County. Here&apos;s to
            many more!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        rowGap={2}
        columnSpacing={mobileMatch ? 0 : 4}
        alignItems="center"
        justifyContent="center"
        sx={{
          [theme.breakpoints.down('sm')]: { px: 4, textAlign: 'center', py: 2 },
          bgcolor: theme.palette.auburnBlue.main,
          borderBottom: 'solid 2px',
          borderColor: theme.palette.auburnOrange.main,
        }}
      >
        <Grid xs={12} sm={6} xl={4}>
          <Grid container rowGap={2}>
            <Grid xs={12}>
              <Grid
                container
                sx={{ color: theme.palette.auburnBlue.contrastText }}
              >
                <Grid xs={12}>
                  <Typography variant="h4" fontWeight="bold">
                    Volunteer with us!
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs={12}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.auburnBlue.contrastText }}
                >
                  Looking to join the fight against hunger? Click the link below
                  to find volunteer opportunities!
                </Typography>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Button
                fullWidth
                sx={{
                  bgcolor: theme.palette.auburnOrange.main,
                  transition: 'ease 0.5s',
                  '&:hover': {
                    bgcolor: theme.palette.auburnSecondaryBlue.main,
                    transition: 'ease 0.5s',
                  },
                }}
                href="https://signup.com/group/1225782704046"
                target="_blank"
                rel="noopener"
              >
                Sign Up Here!
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={6} xl={4}>
          <img
            src="img/KitchenVolunteer1.jpg"
            alt="Volunteers in Kitchen"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage

/**
 * <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
    </p>
 */
