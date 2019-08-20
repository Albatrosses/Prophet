import * as React from 'react';

interface IProps {
	className?: string;
};

export default class Entry extends React.Component<IProps, any> {
  public render() {
    const { className } = this.props;

    return (
      <header className={className}>search + account icon</header>
    );
  }
};
