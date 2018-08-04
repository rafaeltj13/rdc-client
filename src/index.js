import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { Provider } from "react-redux";
import App from './App';
import Sobre from './Sobre';
import Login from './containers/Login';
import ProductList from './containers/ProductList';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setAuthorizationToken } from './utils/setAuthorizationToken';
import store from './store';

setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/login" component={Login} />
                <Route path="/productList" component={ProductList} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
