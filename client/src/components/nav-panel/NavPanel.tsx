import * as React from 'react';
import { Menu } from 'antd';

interface IProps {
  className?: string;
}
export default class NavPanel extends React.Component<IProps, any> {
  public render() {
    const { className } = this.props;
    return (
      <Menu
        theme="dark"
        mode="inline"
        className={className}>
        <Menu.Item>汇总</Menu.Item>
        <Menu.SubMenu title="新闻类">
          <Menu.Item>西安本地宝</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  }
};
