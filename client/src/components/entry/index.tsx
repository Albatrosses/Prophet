import * as React from 'react';
import { Body } from './index.style';
import NavPanel from '../nav-panel/NavPanel';

class Entry extends React.Component {
  public render() {
    return (
      <Body>
        <NavPanel/>
      </Body>
    );
  }
}

export default Entry;
