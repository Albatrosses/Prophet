const { ApolloServer, gql } = require('apollo-server-express');

const graphqlServer = (app) => {
  const typeDefs = gql`
    type Query {
      toutiao: String
      weibo: String
    }
  `;
   
  const resolvers = {
    Query: {
      toutiao: () => '111',
      weibo: () => 'wo shi aaa'
    },
  };
   
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.applyMiddleware({ app });
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

module.exports = graphqlServer;