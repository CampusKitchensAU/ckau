import type { ComponentMeta } from '@storybook/react'

import CommunityPartnersPage from './CommunityPartnersPage'

export const generated = () => {
  return <CommunityPartnersPage />
}

export default {
  title: 'Pages/CommunityPartnersPage',
  component: CommunityPartnersPage,
} as ComponentMeta<typeof CommunityPartnersPage>
