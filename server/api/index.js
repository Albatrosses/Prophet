const { ApolloServer } = require('apollo-server-express');
const toutiao = require('./toutiao/index');

const graphqlServer = (app) => {
  const typeDefs = [
    toutiao.typeDefs
  ];
  const resolvers = {
    ...toutiao.resolvers
  };
   
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.applyMiddleware({ app });
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

module.exports = graphqlServer;