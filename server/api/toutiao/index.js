const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const typeDefs = importSchema('typeDefs.graphql');

module.exports = {
  typeDefs,
  resolvers
};