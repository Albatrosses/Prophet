const router = require('express').Router();
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

  router.get('/listing', (req, res, err) => {
    res.json({id: 11111});
  });

  app.use('/toutiao', router);
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

module.exports = graphqlServer;