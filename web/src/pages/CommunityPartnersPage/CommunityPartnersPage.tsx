import { useEffect } from 'react'

import { Divider, List, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { MetaTags } from '@redwoodjs/web'

import CommunityPartnerListItem from 'src/components/CommunityPartnerListItem/CommunityPartnerListItem'
import PageHeader from 'src/components/PageHeader/PageHeader'
import PartnerForm from 'src/components/PartnerForm/PartnerForm'
import communityPartners from 'src/data/communityPartners'

interface CommunityPartner {
  name: string
  inceptionYear?: number
  email?: string
  website?: string
  city?: string
  state?: string
  bio?: string
}

const CommunityPartnersPage = () => {
  const theme = useTheme()
  const sortedCPs = communityPartners

  const sortCommunityPartners = (a: CommunityPartner, b: CommunityPartner) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  }

  useEffect(() => {
    sortedCPs.sort(sortCommunityPartners)
  }, [sortedCPs])

  return (
    <>
      <MetaTags
        title="CommunityPartners"
        description="CommunityPartners page"
      />

      <PageHeader
        title="Community Partners"
        description="Our community partners are the invaluable organizations who recieve our donations and help us distribute them to those in need."
      />
      <Grid
        container
        sx={{
          [theme.breakpoints.between('lg', 'xl')]: { px: 8 },
          [theme.breakpoints.up('xl')]: { px: 16 },
        }}
      >
        {/**Community Partner List */}
        <Grid xs={12} md={8}>
          <List sx={{ p: 0 }}>
            {sortedCPs.map((partner, idx) => {
              return (
                <CommunityPartnerListItem key={idx} data={partner} idx={idx} />
              )
            })}
          </List>
        </Grid>
        {/**Reach Out Form and Image */}
        <Grid
          xs={12}
          md={4}
          sx={{
            bgcolor: theme.palette.auburnBlue.main,
            '& > div': {
              borderLeft: '6px solid',
              borderLeftColor: theme.palette.auburnOrange.main,
              [theme.breakpoints.down('md')]: { borderLeft: 'none' },
            },
            [theme.breakpoints.down('md')]: { px: 4 },
          }}
        >
          <Grid container height="100%" flexDirection="column">
            <Grid xs={12} sx={{ pb: 4 }}>
              <PartnerForm />
            </Grid>
            <Divider
              sx={{
                borderTopWidth: 2,
                background: theme.palette.auburnOrange.main,
              }}
            />
            <Grid xs={12} sx={{ pt: 4 }}>
              <img
                src={'img/Partners1.jpg'}
                alt="executive team with community partner."
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CommunityPartnersPage
