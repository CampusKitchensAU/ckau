import { render } from '@redwoodjs/testing/web'

import MainContainer from './MainContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainContainer />)
    }).not.toThrow()
  })
})
