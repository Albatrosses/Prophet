import React from 'react';
import './App.css';
import { apolloQuery } from '../../helper/graphqlService';

class App extends React.Component {
  async request() {
    const result = await apolloQuery({
      query: `{
        toutiao
        weibo
      }`
    });
    console.log(result);
    return result;
  }
  componentDidMount() {
    this.request();
  }
  render() {
    return (
      <div>111111</div>
    );
  }
}

export default App