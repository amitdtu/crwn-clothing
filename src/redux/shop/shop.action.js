import ShopActionTypes from './shop.type';

export const updateCollection = (collection) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collection
})

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionSuccess = (collection) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collection
})

export const fetchCollectionFailed = (message) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILED,
    payload: message
})