import ApolloClient, { gql } from 'apollo-boost';
import config from '../config/graphql.json';

const apolloClient = new ApolloClient({
  uri: config.uri
});

export const apolloQuery = async ({ query, ...option }) => {
  const result = await apolloClient.query({
    query: gql`${query}`,
    ...option
  });
  return result.data;
};