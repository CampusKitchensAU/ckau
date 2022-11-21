// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PhoneTextField> = (args) => {
//   return <PhoneTextField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PhoneTextField from './PhoneTextField'

export const generated = () => {
  return <PhoneTextField />
}

export default {
  title: 'Components/PhoneTextField',
  component: PhoneTextField,
} as ComponentMeta<typeof PhoneTextField>
