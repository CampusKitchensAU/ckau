export const schema = gql`
  type Response {
    text: String!
  }
  type Query {
    hello: Response! @skipAuth
  }
`
