import * as React from 'react';
import Entry from './entry';
import { ConfigProvider } from 'antd';
import { globalConfig } from 'src/config';


class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <ConfigProvider {...globalConfig} >
          <Entry/>
        </ConfigProvider>
      </div>
    );
  }
}

export default App;
