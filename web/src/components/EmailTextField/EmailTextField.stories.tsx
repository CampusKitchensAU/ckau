// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EmailTextField> = (args) => {
//   return <EmailTextField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EmailTextField from './EmailTextField'

export const generated = () => {
  return <EmailTextField />
}

export default {
  title: 'Components/EmailTextField',
  component: EmailTextField,
} as ComponentMeta<typeof EmailTextField>
