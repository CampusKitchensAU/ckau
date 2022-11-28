// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SwipeableCarousel> = (args) => {
//   return <SwipeableCarousel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SwipeableCarousel from './SwipeableCarousel'

export const generated = () => {
  return <SwipeableCarousel />
}

export default {
  title: 'Components/SwipeableCarousel',
  component: SwipeableCarousel,
} as ComponentMeta<typeof SwipeableCarousel>
