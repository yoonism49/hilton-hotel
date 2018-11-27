import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore       from './store/configureStore'
import tasks from './reducers';
import App from './views/Layout';
import routes from './routes';
import initialData from '../data';

const store = createStore(
    tasks, 
    initialData 
);
window.appHistory = createBrowserHistory();
render(
	<Provider store={store}>
        <Router  children={routes} history={window.appHistory} />
    </Provider>,
    document.getElementById('app')
);
