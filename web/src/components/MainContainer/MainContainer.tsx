import { Box, Theme } from '@mui/material'

type MainContainerProps = {
  open: boolean
  drawerWidth: number
  theme: Theme
  children?: React.ReactNode
  mobile: boolean
}

const MainContainer = ({
  open,
  drawerWidth,
  theme,
  children,
  mobile,
}: MainContainerProps) => {
  return (
    <Box
      sx={{
        bgcolor: '#EFEBE0',
        flexGrow: 1,
        py: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
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
      {children}
    </Box>
  )
}

export default MainContainer
