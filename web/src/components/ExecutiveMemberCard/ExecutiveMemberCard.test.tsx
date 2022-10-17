import { render } from '@redwoodjs/testing/web'

import ExecutiveMemberCard from './ExecutiveMemberCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExecutiveMemberCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExecutiveMemberCard />)
    }).not.toThrow()
  })
})
