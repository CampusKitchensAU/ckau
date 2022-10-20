import {
  Facebook,
  Handshake,
  Home,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Workspaces,
} from '@mui/icons-material'
import { Box, Divider, Link, Theme, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { routes, Link as RWLink } from '@redwoodjs/router'

type FooterProps = {
  open: boolean
  drawerWidth: number
  theme: Theme
  children?: React.ReactNode
  mobile: boolean
}

//TODO: Make T only be able to be a string or func that returns string
interface iconLink<T> {
  icon: JSX.Element
  href: T
  title: string
}

const contactUsLinks: iconLink<string>[] = [
  {
    icon: <LocationOn />,
    href: 'https://goo.gl/maps/zfLEZ5fABSZF6UULA',
    title: 'Lupton Residence Hall',
  },
  {
    icon: <Mail />,
    href: 'mailto:theckau@gmail.com',
    title: 'theckau@gmail.com',
  },
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com/campuskitchen_au/',
    title: '@campuskitchen_au',
  },
  {
    icon: <Facebook />,
    href: 'https://m.facebook.com/TheCampusKitchenAU/',
    title: '@TheCampusKitchenAU',
  },
]

const siteMapLinks: iconLink<() => string>[] = [
  {
    icon: <Home />,
    href: () => routes.home(),
    title: 'Home',
  },
  {
    icon: <Workspaces />,
    href: () => routes.hungerFighters(),
    title: 'Hunger Fighters',
  },
  {
    icon: <Handshake />,
    href: () => routes.communityPartners(),
    title: 'Community Partners',
  },
]

const Footer = ({ open, drawerWidth, theme, mobile }: FooterProps) => {
  return (
    <Grid
      container
      component={'footer'}
      sx={{
        p: 2,
        pb: 4,
        bgcolor: theme.palette.auburnBlue.main,
        ml: 0,
        ...(open &&
          !mobile && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`,
          }),
      }}
    >
      <Grid xs={12}>
        <Grid
          container
          columnSpacing={2}
          rowGap={2}
          sx={{ color: theme.palette.auburnBlue.contrastText }}
        >
          <Grid xs={12} sm={2}>
            <img
              src={mobile ? 'img/RectangleLogo.png' : 'img/SquareLogo.png'}
              alt="CKAU Logo"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
          <Grid xs={7} sm={3} smOffset={1}>
            <Grid container rowGap={1}>
              <Grid xs={12}>
                <Typography variant="h6" fontWeight="bold">
                  Contact Us
                </Typography>
              </Grid>
              <Grid xs={12}></Grid>
              <Grid container rowGap={1}>
                {contactUsLinks.map((link, idx) => {
                  return (
                    <Grid xs={12} key={idx}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {link.icon}
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener"
                          underline="hover"
                        >
                          {link.title}
                        </Link>
                      </Box>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={5} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Site Map
            </Typography>
            {siteMapLinks.map((link, idx) => {
              return (
                <Box sx={{ display: 'flex', gap: 1 }} key={idx}>
                  {link.icon}
                  <RWLink
                    to={link.href()}
                    style={{
                      color: theme.palette.auburnBlue.contrastText,
                      textDecoration: 'none',
                    }}
                  >
                    <Typography
                      sx={{ '&:hover': { textDecoration: 'underline' } }}
                    >
                      {link.title}
                    </Typography>
                  </RWLink>
                </Box>
              )
            })}
          </Grid>
          <Grid xs={12} sm={3}>
            <Grid container justifyContent="center">
              <Grid xs={8}>
                <Link href="https://auburn.edu/" target="_blank" rel="noopener">
                  <img
                    src="img/AULogo.png"
                    alt="Auburn University Logo"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Link>
              </Grid>
              <Grid xs={8}>
                <Link
                  href="https://auburn.campuslabs.com/engage/organization/thecampuskitchenatau"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="img/AUInvolveLogo.png"
                    alt="Auburn Involve Logo"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Divider
          sx={{
            borderTopWidth: 2,
            background: theme.palette.auburnOrange.main,
          }}
        />
        <Grid
          container
          rowGap={2}
          justifyContent="space-between"
          sx={{
            color: theme.palette.auburnBlue.contrastText,
            textAlign: 'center',
          }}
        >
          <Grid xs={12} sm={3}>
            <Typography>
              &copy; {new Date().getFullYear()} Campus Kitchen AU. All Rights
              Reserved.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            <Grid container justifyContent="center" columnSpacing={1}>
              <Grid xs={12} sm={'auto'}>
                <Typography>Proudly created by</Typography>
              </Grid>
              <Grid
                xs={12}
                sm={'auto'}
                sx={{
                  [theme.breakpoints.up('sm')]: { display: 'flex', gap: 1 },
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/trevor-aupperle/"
                  target="_blank"
                  rel="noopener"
                  underline="always"
                  display="flex"
                  justifyContent="center"
                  color={theme.palette.auburnBlue.contrastText}
                >
                  <LinkedIn /> Trevor Aupperle
                </Link>
                &
                <Link
                  href="https://www.linkedin.com/in/ethan-wilkes/"
                  target="_blank"
                  rel="noopener"
                  underline="always"
                  display="flex"
                  justifyContent="center"
                  color={theme.palette.auburnBlue.contrastText}
                >
                  <LinkedIn /> Ethan Wilkes.
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sm={2}>
            <Typography>Fork Hunger!</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
