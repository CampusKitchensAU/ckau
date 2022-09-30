import { render } from '@redwoodjs/testing/web'

import AppBar from './AppBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppBar />)
    }).not.toThrow()
  })
})
