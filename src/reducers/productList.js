import { ActionTypes } from '../types';

const INITIAL_STATE = {
    products: [],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) =>
{
    switch(action.type){
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, loading: true };
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: false };
        case ActionTypes.FETCH_PRODUCTS_FAILURE:
            return { ...state, products: [], error: "Ocorreu um erro, tente novamente", loading: false };
        default:
            return state;
    }
}