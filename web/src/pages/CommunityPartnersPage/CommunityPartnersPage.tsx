import Grid from '@mui/material/Unstable_Grid2'

import { MetaTags } from '@redwoodjs/web'

import PageHeader from 'src/components/PageHeader/PageHeader'

const CommunityPartnersPage = () => {
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
      <Grid container sx={{ px: 8 }}>
        {/**Community Partner List */}
        <Grid xs={8}></Grid>
        {/**Reach Out Form and Image */}
        <Grid xs={4}></Grid>
      </Grid>
    </>
  )
}

export default CommunityPartnersPage
