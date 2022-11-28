import { useState } from 'react'

import {
  Assignment,
  //CameraAlt,
  ChevronLeft,
  Close,
  Facebook,
  //Groups,
  Handshake,
  Home,
  Instagram,
  Mail,
  Menu,
  Workspaces,
} from '@mui/icons-material'
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { Link, routes } from '@redwoodjs/router'

import AppBar from 'src/components/AppBar/AppBar'
import DrawerHeader from 'src/components/DrawerHeader/DrawerHeader'
import Footer from 'src/components/Footer/Footer'
import MainContainer from 'src/components/MainContainer/MainContainer'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

interface pageLink {
  icon: JSX.Element
  fn: () => string
  title: string
}

const drawerWidth = 280

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const theme = useTheme()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'))

  const pageLinks: pageLink[] = [
    {
      icon: <Home sx={{ color: theme.palette.auburnBlue.contrastText }} />,
      fn: () => routes.home(),
      title: 'Home',
    },
    {
      icon: (
        <Assignment sx={{ color: theme.palette.auburnBlue.contrastText }} />
      ),
      fn: () => routes.howItWorks(),
      title: 'How It Works',
    },
    {
      icon: (
        <Workspaces sx={{ color: theme.palette.auburnBlue.contrastText }} />
      ),
      fn: () => routes.hungerFighters(),
      title: 'Hunger Fighters',
    },
    {
      icon: <Handshake sx={{ color: theme.palette.auburnBlue.contrastText }} />,
      fn: () => routes.communityPartners(),
      title: 'Community Partners',
    },
    // {
    //   icon: <Groups sx={{ color: theme.palette.auburnBlue.contrastText }} />,
    //   fn: () => routes.home(),
    //   title: 'About Us',
    // },
    // {
    //   icon: <CameraAlt sx={{ color: theme.palette.auburnBlue.contrastText }} />,
    //   fn: () => routes.home(),
    //   title: 'Gallery',
    // },
  ]

  return (
    <Box>
      <CssBaseline />
      <AppBar
        open={drawerOpen}
        drawerWidth={drawerWidth}
        theme={theme}
        mobile={mobileMatch}
      >
        <Toolbar
          sx={{
            px: 2,
          }}
          disableGutters
        >
          <Grid container width="100%" alignItems="center">
            <Grid xs display="flex" alignItems="center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(true)}
                sx={{ ...(drawerOpen && { display: 'none' }) }}
              >
                <Menu />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ [theme.breakpoints.down('sm')]: { display: 'none' } }}
              >
                Menu
              </Typography>
            </Grid>
            <Grid xs>
              <Typography
                variant="h5"
                noWrap
                component="div"
                fontWeight="bold"
                textAlign="center"
              >
                CKAU
              </Typography>
            </Grid>
            <Grid xs display="flex" justifyContent="end">
              <IconButton
                href="https://www.instagram.com/campuskitchen_au/"
                target="_blank"
                rel="noopener"
              >
                <Instagram sx={{ color: 'rgba(0,0,0,1)' }} />
              </IconButton>
              <IconButton
                href="https://m.facebook.com/TheCampusKitchenAU/"
                target="_blank"
                rel="noopener"
              >
                <Facebook sx={{ color: 'rgba(0,0,0,1)' }} />
              </IconButton>
              <IconButton
                href="mailto:theckau@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <Mail sx={{ color: 'rgba(0,0,0,1)' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: mobileMatch ? '100%' : drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: mobileMatch ? '100%' : drawerWidth,
            boxSizing: 'border-box',
            bgcolor: theme.palette.auburnBlue.main,
            height: '100%',
          },
        }}
        variant="persistent"
        anchor={mobileMatch ? 'top' : 'left'}
        open={drawerOpen}
      >
        <DrawerHeader theme={theme}>
          <img
            src="img/RectangleLogo-removedbg.png"
            alt="Auburn Involve Logo"
            style={{
              width: 'auto',
              height: '56px',
            }}
          />
          <IconButton onClick={() => setDrawerOpen(false)}>
            {mobileMatch ? <Close /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          component={'nav'}
          sx={{
            bgcolor: theme.palette.auburnBlue.main,
            [theme.breakpoints.down('sm')]: { height: '100%' },
          }}
          disablePadding
        >
          {/** Put nav list here. */}
          {pageLinks.map((link, idx) => {
            return (
              <Link
                to={link.fn()}
                key={idx}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.auburnBlue.contrastText,
                }}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItem
                  sx={{
                    '&:hover': {
                      bgcolor: theme.palette.auburnOrange.main,
                    },
                  }}
                >
                  <ListItemIcon sx={{ justifyContent: 'center' }}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.title} />
                </ListItem>
              </Link>
            )
          })}
        </List>
      </Drawer>
      <MainContainer
        open={drawerOpen}
        drawerWidth={drawerWidth}
        theme={theme}
        mobile={mobileMatch}
      >
        <DrawerHeader theme={theme} />
        {children}
      </MainContainer>
      <Footer
        open={drawerOpen}
        drawerWidth={drawerWidth}
        theme={theme}
        mobile={mobileMatch}
      />
    </Box>
  )
}

export default DefaultLayout
