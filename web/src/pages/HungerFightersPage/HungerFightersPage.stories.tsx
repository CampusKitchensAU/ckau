import type { ComponentMeta } from '@storybook/react'

import HungerFightersPage from './HungerFightersPage'

export const generated = () => {
  return <HungerFightersPage />
}

export default {
  title: 'Pages/HungerFightersPage',
  component: HungerFightersPage,
} as ComponentMeta<typeof HungerFightersPage>
