// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ExecutiveMemberCard> = (args) => {
//   return <ExecutiveMemberCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ExecutiveMemberCard from './ExecutiveMemberCard'

export const generated = () => {
  return <ExecutiveMemberCard />
}

export default {
  title: 'Components/ExecutiveMemberCard',
  component: ExecutiveMemberCard,
} as ComponentMeta<typeof ExecutiveMemberCard>
