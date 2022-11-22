// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AnimatedStat> = (args) => {
//   return <AnimatedStat {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AnimatedStat from './AnimatedStat'

export const generated = () => {
  return <AnimatedStat />
}

export default {
  title: 'Components/AnimatedStat',
  component: AnimatedStat,
} as ComponentMeta<typeof AnimatedStat>
