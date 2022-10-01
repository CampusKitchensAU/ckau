import { Box, Theme } from '@mui/material'

type MainContainerProps = {
  open: boolean
  drawerWidth: number
  theme: Theme
  children?: React.ReactNode
}

const MainContainer = ({
  open,
  drawerWidth,
  theme,
  children,
}: MainContainerProps) => {
  return (
    <Box
      sx={{
        bgcolor: '#EFEBE0',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        ...(open && {
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
