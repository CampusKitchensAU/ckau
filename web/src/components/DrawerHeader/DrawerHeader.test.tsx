import { render } from '@redwoodjs/testing/web'

import DrawerHeader from './DrawerHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DrawerHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrawerHeader />)
    }).not.toThrow()
  })
})
