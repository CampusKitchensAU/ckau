import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material'

interface executiveMember {
  name: string
  position: string
  img: string
  gender: 'male' | 'female'
}

const ExecutiveMemberCard = ({
  executiveMember,
}: {
  executiveMember: executiveMember
}) => {
  const theme = useTheme()

  return (
    <Card sx={{ bgcolor: theme.palette.auburnBlue.main }}>
      <CardMedia
        component="img"
        alt={'Headshot of ' + executiveMember.name}
        image={
          executiveMember.img == ''
            ? executiveMember.gender == 'male'
              ? 'img/businessman.png'
              : 'img/lady.png'
            : executiveMember.img
        }
      />
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          color={theme.palette.auburnBlue.contrastText}
        >
          {executiveMember.name}
        </Typography>
        <Typography color={theme.palette.auburnBlue.contrastText}>
          {executiveMember.position}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ExecutiveMemberCard
