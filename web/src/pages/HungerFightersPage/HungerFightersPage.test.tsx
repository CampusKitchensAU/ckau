import { render } from '@redwoodjs/testing/web'

import HungerFightersPage from './HungerFightersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HungerFightersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HungerFightersPage />)
    }).not.toThrow()
  })
})
