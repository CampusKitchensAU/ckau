import { render } from '@redwoodjs/testing/web'

import AnimatedStat from './AnimatedStat'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimatedStat', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimatedStat />)
    }).not.toThrow()
  })
})
