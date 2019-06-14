import * as React from 'react';
import MenuPanel from './menu/menuPanel';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <MenuPanel/>
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
