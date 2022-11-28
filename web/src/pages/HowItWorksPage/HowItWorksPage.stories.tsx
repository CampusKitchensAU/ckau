import type { ComponentMeta } from '@storybook/react'

import HowItWorksPage from './HowItWorksPage'

export const generated = () => {
  return <HowItWorksPage />
}

export default {
  title: 'Pages/HowItWorksPage',
  component: HowItWorksPage,
} as ComponentMeta<typeof HowItWorksPage>
