import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Hotel from './components/App';
import Home from './components/App';
import Layout           from './views/Layout'

export default (
	<Route>
		<Layout path='/' component={Hotel} />
	</Route>
);
