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

import AppBar from 'src/components/AppBar/AppBar'
import DrawerHeader from 'src/components/DrawerHeader/DrawerHeader'
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
        <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(true)}
              edge="start"
              sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
          </Box>
          <Typography variant="h5" noWrap component="div" fontWeight="bold">
            CKAU
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
          </Box>
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
    </Box>
  )
}

export default DefaultLayout
