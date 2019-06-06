import resolvers from './resolvers';
import { importSchema } from 'graphql-import';

const collectiveSchema: any = importSchema(process.cwd() + '/schemas/collectiveSchema.graphql');

const typeDefs: Array<any> = [collectiveSchema];

export {
  resolvers,
  typeDefs
};