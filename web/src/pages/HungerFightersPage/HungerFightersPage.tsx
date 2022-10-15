import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HungerFightersPage = () => {
  return (
    <>
      <MetaTags title="HungerFighters" description="HungerFighters page" />

      <h1>HungerFightersPage</h1>
      <p>
        Find me in <code>./web/src/pages/HungerFightersPage/HungerFightersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hungerFighters</code>, link to me with `
        <Link to={routes.hungerFighters()}>HungerFighters</Link>`
      </p>
    </>
  )
}

export default HungerFightersPage
