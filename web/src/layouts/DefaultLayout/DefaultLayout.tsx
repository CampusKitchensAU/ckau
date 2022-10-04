import { useState } from 'react'

import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  Menu,
} from '@mui/icons-material'
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import AppBar from 'src/components/AppBar/AppBar'
import DrawerHeader from 'src/components/DrawerHeader/DrawerHeader'
import Footer from 'src/components/Footer/Footer'
import MainContainer from 'src/components/MainContainer/MainContainer'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const drawerWidth = 240

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const theme = useTheme()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  return (
    <Box>
      <CssBaseline />
      <AppBar open={drawerOpen} drawerWidth={drawerWidth} theme={theme}>
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
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <DrawerHeader theme={theme}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>{/** Put nav list here. */}</List>
      </Drawer>
      <MainContainer open={drawerOpen} drawerWidth={drawerWidth} theme={theme}>
        <DrawerHeader theme={theme} />
        {children}
      </MainContainer>
      <Footer />
    </Box>
  )
}

export default DefaultLayout
