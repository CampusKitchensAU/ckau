import { Box, Typography, useTheme } from '@mui/material'

const PageHeader = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: theme.palette.auburnBlue.main,
        color: theme.palette.auburnBlue.contrastText,
        textAlign: 'center',
        px: 30,
        pt: 4,
        pb: 2,
        mt: -3,
        [theme.breakpoints.down('sm')]: { px: 4 },
        [theme.breakpoints.between('sm', 'md')]: { px: 6 },
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  )
}

export default PageHeader
