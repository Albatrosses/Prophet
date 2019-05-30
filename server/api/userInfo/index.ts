import resolvers from './resolvers';
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getUserInfo(id: Int): UserInfo
  }
  
  type UserInfo {
    id: Int!,
    name: String,
    isViewerFriend: Boolean,
    getProfilePicture(size: Int): profilePicture
  }

  type profilePicture {
    uri: String,
    width: Int,
    height: Int
  }
`;

export {
  resolvers
};