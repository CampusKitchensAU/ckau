// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AppBar> = (args) => {
//   return <AppBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AppBar from './AppBar'

export const generated = () => {
  return <AppBar />
}

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>
