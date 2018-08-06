import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import ProductList from './containers/ProductList';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

import { setAuthorizationToken } from './utils/setAuthorizationToken';

import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(compose(applyMiddleware(routerMiddleware(history), promise(), thunk, logger)))
);

setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/productList" component={ProductList} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
