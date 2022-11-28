// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof OperationsStepper> = (args) => {
//   return <OperationsStepper {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import OperationsStepper from './OperationsStepper'

export const generated = () => {
  return <OperationsStepper />
}

export default {
  title: 'Components/OperationsStepper',
  component: OperationsStepper,
} as ComponentMeta<typeof OperationsStepper>
