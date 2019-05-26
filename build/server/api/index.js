var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ApolloServer = require('apollo-server-express').ApolloServer;
var toutiao = require('./toutiao/index');
var graphqlServer = function (app) {
    var typeDefs = [
        toutiao.typeDefs
    ];
    var resolvers = __assign({}, toutiao.resolvers);
    var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
    server.applyMiddleware({ app: app });
    app.listen({ port: 4000 }, function () {
        return console.log("\uD83D\uDE80 Server ready at http://localhost:4000" + server.graphqlPath);
    });
};
module.exports = graphqlServer;
