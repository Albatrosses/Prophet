import React from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const client = new ApolloClient();
    const channelsListQuery = gql`
      query Query {
        toutiao
      }
    `;
  }
  render() {
    return (
      <div className="App">111111</div>
    );
  }
}

export default graphql(channelsListQuery)(ChannelsList)