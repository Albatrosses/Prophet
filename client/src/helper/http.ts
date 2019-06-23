import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export const http = async () => {
  const result = await client.query({
    query: gql`{
      getListingBenDiBao(expandArray: [1]) {
        point
        link
        expand
        detail {
          title
          date
          lead
          content
        }
      }
    }`
  });
  return result;
};