import {
  ArrowRight,
  Language,
  LocationOn,
  MailOutline,
} from '@mui/icons-material'
import {
  IconButton,
  Link,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

interface CommunityPartner {
  name: string
  inceptionYear?: number
  email?: string
  website?: string
  city?: string
  state?: string
  bio?: string
}

const CommunityPartnerListItem = ({
  data,
  idx,
}: {
  data: CommunityPartner
  idx: number
}) => {
  const theme = useTheme()

  return (
    <ListItem
      sx={{
        bgcolor: idx % 2 == 0 ? theme.palette.auburnOrange.light : 'default',
        alignItems: 'center',
        minHeight: 92,
      }}
    >
      <Grid container width="100%" alignItems="center">
        <Grid xs={12} sm={6}>
          <ListItemText
            primary={
              <Typography variant="h5" color={theme.palette.auburnBlue.main}>
                {data.name}
              </Typography>
            }
            secondary={
              data.inceptionYear && (
                <Typography color={theme.palette.auburnBlue.main}>
                  since {data.inceptionYear}
                </Typography>
              )
            }
          />
        </Grid>
        <Grid
          xs={8}
          sm={4}
          display="flex"
          alignItems="center"
          sx={{
            [theme.breakpoints.down(350)]: {
              width: `calc(100% * 12 / var(--Grid-columns))`,
            },
          }}
        >
          <IconButton disabled={!data.email} href={'mailto:' + data.email}>
            <MailOutline
              sx={{ color: data.email && theme.palette.auburnBlue.main }}
            />
          </IconButton>
          <IconButton
            disabled={!data.website}
            href={data.website}
            target="_blank"
            rel="noopener"
          >
            <Language
              sx={{ color: data.website && theme.palette.auburnBlue.main }}
            />
          </IconButton>
          <IconButton disabled>
            <LocationOn
              sx={{
                color:
                  (data.city || data.state) && theme.palette.auburnBlue.main,
              }}
            />
          </IconButton>
          <Typography>
            {data.city && data.city + ','} {data.state}
          </Typography>
        </Grid>
        <Grid
          xs={4}
          sm={2}
          sx={{
            [theme.breakpoints.down(350)]: {
              width: `calc(100% * 12 / var(--Grid-columns))`,
            },
          }}
        >
          <Tooltip title="coming soon!" arrow>
            <Link
              underline={data.bio ? 'hover' : 'none'}
              sx={{
                display: 'flex',
                color: data.bio
                  ? theme.palette.auburnBlue.main
                  : theme.palette.text.disabled,
              }}
            >
              <ArrowRight />
              <Typography>Learn more</Typography>
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default CommunityPartnerListItem
