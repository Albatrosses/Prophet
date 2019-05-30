import { find } from 'lodash';

const userListing = [{
	id: 1,
  name: 'pujunhao',
  isViewerFriend: true,
  profilePicture: [
		{
			uri: 'https://scontent-atl3-1.cdninstagram.com/vp/5aa101cd1a9995f1b6d27483654e62d3/5D7D39EA/t51.2885-15/e35/52897005_400576070503982_4282618166604727157_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
			width: 30,
			height: 30
		},
		{
			uri: 'https://scontent-atl3-1.cdninstagram.com/vp/5aa101cd1a9995f1b6d27483654e62d3/5D7D39EA/t51.2885-15/e35/52897005_400576070503982_4282618166604727157_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
			width: 100,
			height: 100
		}
	]
},
{
	id: 2,
  name: 'jiadong',
  isViewerFriend: false,
  profilePicture: [
		{
			uri: 'http://8.pic.pc6.com/thumb/up/2017-2/20172231458586537546855205920_600_0.jpg',
			width: 30,
			height: 30
		},
		{
			uri: 'http://8.pic.pc6.com/thumb/up/2017-2/20172231458586537546855205920_600_0.jpg',
			width: 100,
			height: 100
		}
	]
}]
const resolvers = {
	Query: {
		getUserInfo (root, { id }) {
			return find(userListing, userInfo => userInfo.id === id);
		}
	},
	UserInfo: {
		getProfilePicture (parent, { size }) {
			return find(parent.profilePicture, profilePicture => profilePicture.width * profilePicture.height === size);
		}
	}
};

export default resolvers;