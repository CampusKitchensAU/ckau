import { render } from '@redwoodjs/testing/web'

import HorizontalList from './HorizontalList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HorizontalList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HorizontalList />)
    }).not.toThrow()
  })
})
