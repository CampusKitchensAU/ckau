import { render } from '@redwoodjs/testing/web'

import EmailTextField from './EmailTextField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmailTextField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmailTextField />)
    }).not.toThrow()
  })
})
