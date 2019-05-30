"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const userInfo_1 = require("./userInfo/");
const graphqlServer = (app) => {
    const server = new apollo_server_express_1.ApolloServer({ typeDefs: userInfo_1.typeDefs, resolvers: userInfo_1.resolvers });
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};
exports.default = graphqlServer;
