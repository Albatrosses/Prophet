import * as React from 'react';
import { ContentPanelStyle } from './ContentPanel.style';
import BreadCrumbs from './bread-crumbs/BreadCrumbs';
import ContentListing from './content-listing/ContentListing';

export const ContentPanel: React.FC<any> = () => {
	return (
		<ContentPanelStyle>
			<BreadCrumbs/>
			<ContentListing/>
		</ContentPanelStyle>
	);
};
