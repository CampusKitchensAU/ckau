import { render } from '@redwoodjs/testing/web'

import HowItWorksPage from './HowItWorksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HowItWorksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HowItWorksPage />)
    }).not.toThrow()
  })
})
