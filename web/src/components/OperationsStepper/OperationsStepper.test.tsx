import { render } from '@redwoodjs/testing/web'

import OperationsStepper from './OperationsStepper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OperationsStepper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OperationsStepper />)
    }).not.toThrow()
  })
})
