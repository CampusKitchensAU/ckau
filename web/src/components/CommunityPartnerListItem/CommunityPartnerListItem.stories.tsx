// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CommunityPartnerListItem> = (args) => {
//   return <CommunityPartnerListItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CommunityPartnerListItem from './CommunityPartnerListItem'

export const generated = () => {
  return <CommunityPartnerListItem />
}

export default {
  title: 'Components/CommunityPartnerListItem',
  component: CommunityPartnerListItem,
} as ComponentMeta<typeof CommunityPartnerListItem>
