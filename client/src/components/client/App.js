import React from 'react';
import './App.css';
import { gql, Query } from 'react-apollo';

const channelsListQuery = gql`
  {
    toutiao 
  }
`;
class App extends React.Component {
  render() {
    return (
      <Query query={channelsListQuery}>
        {({ loading, error, data }) => {
          return data
        }}
      </Query>
    );
  }
}

export default App