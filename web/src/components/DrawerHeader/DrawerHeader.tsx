import { Box, Theme } from '@mui/material'

type DrawerHeaderProps = {
  theme: Theme
  children?: React.ReactNode
}

const DrawerHeader = ({ theme, children }: DrawerHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }}
    >
      {children}
    </Box>
  )
}

export default DrawerHeader
