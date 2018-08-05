import axios from 'axios';
import { ActionTypes } from '../types';
import { BASE_URL } from '../constants';

const PRODUCT_URL = `${BASE_URL}/product`

export const fetchProducts = letter => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.FETCH_PRODUCTS });
        axios.get(`${PRODUCT_URL}/GetByFirstLetter/${letter}`)
            .then(function (response) {
                fetchProductsSuccess(response.data, dispatch);
            })
            .catch(function (error) {
                fetchProductsFailure(dispatch);
            });
    }
}

export const fetchAllProducts = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.FETCH_PRODUCTS });
        axios.get(PRODUCT_URL)
            .then(function (response) {
                fetchProductsSuccess(response.data, dispatch);
            })
            .catch(function (error) {
                fetchProductsFailure(dispatch);
            });
    }
}

const fetchProductsSuccess = (products, dispatch) => {
    dispatch({
        type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products
    });
}

const fetchProductsFailure = dispatch => {
    dispatch({ type: ActionTypes.FETCH_PRODUCTS_FAILURE });
}