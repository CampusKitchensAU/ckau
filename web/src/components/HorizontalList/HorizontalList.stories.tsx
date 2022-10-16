// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HorizontalList> = (args) => {
//   return <HorizontalList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import HorizontalList from './HorizontalList'

export const generated = () => {
  return <HorizontalList />
}

export default {
  title: 'Components/HorizontalList',
  component: HorizontalList,
} as ComponentMeta<typeof HorizontalList>
