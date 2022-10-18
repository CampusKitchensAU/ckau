// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PageHeader> = (args) => {
//   return <PageHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PageHeader from './PageHeader'

export const generated = () => {
  return <PageHeader />
}

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>
