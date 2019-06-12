import * as React from 'react';
import 'src/dist/style/App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <div className="menu">menu</div>
        <div className="work">
          <div className="interface">interface</div>
          <div className="workspace">workspace</div>
          <div className="editor">editor</div>
        </div>
      </div>
    );
  }
}

export default App;
