import { Box, Divider, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import HorizontalList from 'src/components/HorizontalList/HorizontalList'
import PageHeader from 'src/components/PageHeader/PageHeader'
import leadershipTeam from 'src/data/leadershipTeam'
import theme from 'src/theme'

const HungerFightersPage = () => {
  return (
    <>
      <MetaTags title="HungerFighters" description="HungerFighters page" />

      <PageHeader
        title="Hunger Fighters"
        description="The Campus Kitchen at Auburn is a student-led organization devoted to fighting hunger in the East Central Alabama community. Our ‘Hunger Fighters’ live up to the Auburn creed, embodying everything it takes to be an Auburn man or woman. We are all working together as one to fork hunger!"
      />
      <Box component="div" sx={{ px: 4 }}>
        {/** Executive team section */}
        <Box sx={{ py: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            Executive Team
          </Typography>
          <Typography fontStyle="italic">
            The executive team is responsible for directing operations,
            communicating with food donors and community partners, and training
            shift leaders.
          </Typography>
        </Box>
        <Divider
          sx={{
            borderTopWidth: 2,
            background: theme.palette.auburnOrange.main,
          }}
        />
        {/** Leadership team section */}
        <Box sx={{ py: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            Leadership Team
          </Typography>
          <Typography fontStyle="italic">
            Shift leaders are responsible for regular weekly shifts for a
            semester, as well as training/managing volunteers.
          </Typography>
          <Box>
            <HorizontalList list={leadershipTeam} chunkSize={12} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HungerFightersPage
