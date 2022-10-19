import type { QueryResolvers } from 'types/graphql'
export const hello: QueryResolvers['hello'] = () => {
  return { text: 'API Works!' }
}
