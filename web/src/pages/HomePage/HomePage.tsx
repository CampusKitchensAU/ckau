import { AccessTime, Handshake, Restaurant, Scale } from '@mui/icons-material'
import { Box, Button, Divider, Typography, useTheme } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

interface mainStat {
  icon: JSX.Element
  data: string
  title: string
}

const mainStats: mainStat[] = [
  {
    icon: <Scale sx={{ fontSize: '96px' }} />,
    data: '65,654',
    title: 'Pounds of Food Recovered',
  },
  {
    icon: <Restaurant sx={{ fontSize: '96px' }} />,
    data: '12,843',
    title: 'Meals Served',
  },
  {
    icon: <AccessTime sx={{ fontSize: '96px' }} />,
    data: '2,500',
    title: 'Hours of Service',
  },
  {
    icon: <Handshake sx={{ fontSize: '96px' }} />,
    data: '56',
    title: 'Community Parnters',
  },
]

const HomePage = () => {
  const theme = useTheme()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/** Hero Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          px: 8,
          paddingBottom: 4,
        }}
      >
        <Typography variant="h1">The Campus Kitchen at Auburn</Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            borderRightWidth: 3,
            background: theme.palette.auburnBlue.main,
          }}
        />
        <img
          src="img/ExecTeam1.jpg"
          alt="Executive Team"
          style={{
            width: '100%',
            maxWidth: '700px',
            height: 'auto',
          }}
        />
      </Box>
      <Box
        sx={{ width: '100%', p: 3, bgcolor: theme.palette.auburnOrange.main }}
      >
        <Typography variant="h3" textAlign="center">
          &quot;Fighting food waste and hunger in the East Central Alabama
          community.&quot;
        </Typography>
      </Box>
      {/** Welcome Statement */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 8,
          py: 4,
          gap: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Welcome to the Campus Kitchen!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <Typography variant="h6">
            Whether you&apos;re in walking distance to Toomer&apos;s Residence
            Hall Basement or browsing from miles away, we&apos;re so glad
            you&apos;re here to learn about this organization. The Campus
            Kitchen at Auburn University (CKAU) is a student-led hunger solution
            project located in Auburn, Alabama that recovers leftover food from
            campus dining locations and serves it to members of our community.
            We fight food waste and hunger all at once!
          </Typography>
          <Typography variant="h6">
            Founded in 2014 as Auburn&apos;s chapter of the Campus Kitchens
            Project by DC Central Kitchen (a national initiative that encouraged
            universities to start their own food recovery chapters from
            2001-2018), CKAU is now an independent organization sponsored by the
            Office of Public Service in University Outreach. We are still part
            of a much larger picture, with the Universities Fighting World
            Hunger (UFWH) headquarters in Auburn. To date, CKAU has recovered
            160,746 pounds of food and served 153,400 meals to members of Lee
            County. Here&apos;s to many more!
          </Typography>
        </Box>
      </Box>
      {/** Live Statistics */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 8,
          py: 4,
          bgcolor: theme.palette.auburnBlue.main,
          color: theme.palette.auburnBlue.contrastText,
          gap: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Live 2022 Statistics
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {mainStats.map((stat: mainStat, idx: number) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {stat.icon}
                <Typography
                  variant="h3"
                  color={theme.palette.auburnOrange.main}
                  fontWeight="bold"
                >
                  {stat.data}
                </Typography>
                <Typography variant="h4">{stat.title}</Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
      {/** Volunteer Section */}
      <Box sx={{ display: 'flex', py: 4, px: 8, gap: 8, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box component={'div'}>
            <Typography variant="h4" fontWeight="bold">
              Volunteer with us!
            </Typography>
            <Typography variant="h6">
              Looking to join the fight against hunger? Click the link below to
              find volunteer opportunities!
            </Typography>
          </Box>
          <Button
            sx={{
              bgcolor: theme.palette.auburnOrange.main,
              '&:hover': { bgcolor: theme.palette.auburnBlue.main },
            }}
            href="https://signup.com/group/1225782704046"
            target="_blank"
            rel="noopener"
          >
            Sign Up Here!
          </Button>
        </Box>
        <img
          src="img/KitchenVolunteer1.jpg"
          alt="Volunteers in Kitchen"
          style={{
            width: '100%',
            maxWidth: '550px',
            height: 'auto',
          }}
        />
      </Box>
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
