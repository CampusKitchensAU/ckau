import { AppBar as MuiAppBar, Theme } from '@mui/material'

type AppBarProps = {
  open: boolean
  drawerWidth: number
  theme: Theme
  children?: React.ReactNode
  mobile: boolean
}

const AppBar = ({
  open,
  drawerWidth,
  theme,
  children,
  mobile,
}: AppBarProps) => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open &&
          !mobile && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        right: 'auto',
        width: '100vw',
      }}
    >
      {children}
    </MuiAppBar>
  )
}

export default AppBar
