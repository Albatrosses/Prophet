"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const collectiveResolver_1 = __importDefault(require("./resolvers/collectiveResolver"));
const graphql_import_1 = require("graphql-import");
const collectiveSchema = graphql_import_1.importSchema(process.cwd() + '/schemas/collectiveSchema.graphql');
const typeDefs = [collectiveSchema];
const graphqlServer = (app) => {
    const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers: collectiveResolver_1.default });
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};
exports.default = graphqlServer;
