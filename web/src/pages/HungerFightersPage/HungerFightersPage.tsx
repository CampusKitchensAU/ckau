import { MetaTags } from '@redwoodjs/web'

import PageHeader from 'src/components/PageHeader/PageHeader'

const HungerFightersPage = () => {
  return (
    <>
      <MetaTags title="HungerFighters" description="HungerFighters page" />

      <PageHeader
        title="Hunger Fighters"
        description="The Campus Kitchen at Auburn is a student-led organization devoted to fighting hunger in the East Central Alabama community. Our ‘Hunger Fighters’ live up to the Auburn creed, embodying everything it takes to be an Auburn man or woman. We are all working together as one to fork hunger!"
      />
    </>
  )
}

export default HungerFightersPage
