import { render } from '@redwoodjs/testing/web'

import CommunityPartnersPage from './CommunityPartnersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CommunityPartnersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityPartnersPage />)
    }).not.toThrow()
  })
})
