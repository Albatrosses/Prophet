var importSchema = require('graphql-import').importSchema;
var resolvers = require('./resolvers');
var typeDefs = "type getNewsListing {\n  news_name\n}";
module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
};
