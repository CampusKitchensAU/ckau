import { render } from '@redwoodjs/testing/web'

import PhoneTextField from './PhoneTextField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PhoneTextField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhoneTextField />)
    }).not.toThrow()
  })
})
