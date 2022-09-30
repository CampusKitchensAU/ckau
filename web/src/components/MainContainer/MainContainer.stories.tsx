// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MainContainer> = (args) => {
//   return <MainContainer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MainContainer from './MainContainer'

export const generated = () => {
  return <MainContainer />
}

export default {
  title: 'Components/MainContainer',
  component: MainContainer,
} as ComponentMeta<typeof MainContainer>
