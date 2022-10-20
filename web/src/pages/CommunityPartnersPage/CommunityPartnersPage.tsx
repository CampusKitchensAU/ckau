import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CommunityPartnersPage = () => {
  return (
    <>
      <MetaTags title="CommunityPartners" description="CommunityPartners page" />

      <h1>CommunityPartnersPage</h1>
      <p>
        Find me in <code>./web/src/pages/CommunityPartnersPage/CommunityPartnersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>communityPartners</code>, link to me with `
        <Link to={routes.communityPartners()}>CommunityPartners</Link>`
      </p>
    </>
  )
}

export default CommunityPartnersPage
