import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers} from './userInfo/';

const graphqlServer = (app) => {
   
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.applyMiddleware({ app });
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

export default graphqlServer;