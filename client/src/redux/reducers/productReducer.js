import { combineReducers } from 'redux';

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}

const allReducers = combineReducers({
    products: productReducer
})

export default allReducers;