import { render } from '@redwoodjs/testing/web'

import CommunityPartnerListItem from './CommunityPartnerListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommunityPartnerListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityPartnerListItem />)
    }).not.toThrow()
  })
})
