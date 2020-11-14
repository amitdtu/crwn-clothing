import ShopActionTypes from './shop.type'

const INITIAL_STATE = {
    collections: null,
    isFetching: true,
    errorMessage: null,
}

const shopReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTION:
            return {
                ...state,
                collections: action.payload,
            }
            
        case ShopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true,
            }

        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }

        case ShopActionTypes.FETCH_COLLECTION_FAILED:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;