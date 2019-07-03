import * as React from 'react';
import { ContentPanelStyle } from './ContentPanel.style';

interface IProps {
	className?: string;
};

export default class ContentPanel extends React.Component<IProps, any> {
	public render() {
		const { className } = this.props;

		return (
			<ContentPanelStyle className={className}>
				<section className="bread-crumbs">我是面包屑</section>
				<section className="content-listing">我是内容</section>
			</ContentPanelStyle>
		);
	}
};