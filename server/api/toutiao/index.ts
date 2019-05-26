const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const typeDefs = `type getNewsListing {
  news_name
}`;

module.exports = {
  typeDefs,
  resolvers
};