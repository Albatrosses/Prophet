import * as React from 'react';
import { Body } from './index.style';
import NavPanel from '../nav-panel/NavPanel';
import ContentPanel from '../content-panel/ContentPanel';

class Entry extends React.Component {
  public render() {
    return (
      <Body>
        <NavPanel className="nav-panel" />
        <ContentPanel className="content-panel" />
      </Body>
    );
  }
}

export default Entry;
