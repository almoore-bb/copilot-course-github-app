import { gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      avatarUrl
      login
      name
      pullRequests(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            id
            title
            createdAt
            state
            repository {
              name
              owner {
                login
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_USER;