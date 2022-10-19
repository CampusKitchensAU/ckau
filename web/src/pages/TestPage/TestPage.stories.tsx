import type { ComponentMeta } from '@storybook/react'

import TestPage from './TestPage'

export const generated = () => {
  return <TestPage />
}

export default {
  title: 'Pages/TestPage',
  component: TestPage,
} as ComponentMeta<typeof TestPage>
