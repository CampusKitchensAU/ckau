import { render } from '@redwoodjs/testing/web'

import SwipeableCarousel from './SwipeableCarousel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SwipeableCarousel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SwipeableCarousel />)
    }).not.toThrow()
  })
})
