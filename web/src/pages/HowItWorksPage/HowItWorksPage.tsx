import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HowItWorksPage = () => {
  return (
    <>
      <MetaTags title="HowItWorks" description="HowItWorks page" />

      <h1>HowItWorksPage</h1>
      <p>
        Find me in <code>./web/src/pages/HowItWorksPage/HowItWorksPage.tsx</code>
      </p>
      <p>
        My default route is named <code>howItWorks</code>, link to me with `
        <Link to={routes.howItWorks()}>HowItWorks</Link>`
      </p>
    </>
  )
}

export default HowItWorksPage
