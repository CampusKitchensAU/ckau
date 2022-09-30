// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DrawerHeader> = (args) => {
//   return <DrawerHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DrawerHeader from './DrawerHeader'

export const generated = () => {
  return <DrawerHeader />
}

export default {
  title: 'Components/DrawerHeader',
  component: DrawerHeader,
} as ComponentMeta<typeof DrawerHeader>
