import { combineReducers } from 'redux';
import AuthReducer from './auth';
import RegisterReducer from './register';
import ProductListReducer from './productList';

export default combineReducers({
    auth: AuthReducer,
    productList: ProductListReducer,
    register: RegisterReducer
});