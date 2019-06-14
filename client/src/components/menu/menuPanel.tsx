import * as React from 'react';
import { Menu } from './menuPanel.style';

class MenuPanel extends React.Component {
  public render() {
    return (
      <Menu>
        <ul>
          <li>文件</li>
          <li>编辑</li>
          <li>打开</li>
          <li>重载</li>
          <li>关于</li>
        </ul>
      </Menu>
    );
  }
}

export default MenuPanel;
