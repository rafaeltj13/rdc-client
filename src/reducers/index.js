import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ProductList from './productList';

export default combineReducers({
    auth: AuthReducer,
    productList: ProductList
});