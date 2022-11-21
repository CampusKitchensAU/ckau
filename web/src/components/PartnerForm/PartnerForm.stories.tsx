// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PartnerForm> = (args) => {
//   return <PartnerForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PartnerForm from './PartnerForm'

export const generated = () => {
  return <PartnerForm />
}

export default {
  title: 'Components/PartnerForm',
  component: PartnerForm,
} as ComponentMeta<typeof PartnerForm>
