import * as React from 'react';
import { Menu } from 'antd';

class NavPanel extends React.Component {
  public render() {
    return (
      <Menu
        theme="dark"
        mode="inline">
        <Menu.Item>菜单项</Menu.Item>
        <Menu.SubMenu title="子菜单">
          <Menu.Item>子菜单项</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  }
}

export default NavPanel;
