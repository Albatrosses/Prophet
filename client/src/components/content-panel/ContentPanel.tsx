import * as React from 'react';
import { ContentPanelStyle } from './ContentPanel.style';
import AccountPanel from './account-panel/AccountPanel';
import BreadCrumbs from './bread-crumbs/BreadCrumbs';
import ContentListing from './content-listing/ContentListing';

interface IProps {
	className?: string;
};

export default class ContentPanel extends React.Component<IProps, any> {
	public render() {
		const { className } = this.props;

		return (
			<ContentPanelStyle className={className}>
				<AccountPanel className="account-panel" />
				<BreadCrumbs className="bread-crumbs" />
				<ContentListing className="content-listing" />
			</ContentPanelStyle>
		);
	}
};