import * as React from 'react';
import MenuPanel from './menu/menuPanel';
import { http } from 'src/helper/http';

class App extends React.Component {
  public async componentDidMount() {
    const result = await http();
    console.log(result.data);
  }
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
