import * as React from 'react';
import { Body } from './index.style';
import NavPanel from '../nav-panel/NavPanel';
import ContentPanel from '../content-panel/ContentPanel';
import Header from '../header/Header';

export default class Entry extends React.Component {
  public render() {
    return (
      <>
      <Header className="header" />
      <Body className="container">
        <NavPanel className="nav-panel" />
        <ContentPanel className="content-panel" />
      </Body>
      </>
    );
  }
};
