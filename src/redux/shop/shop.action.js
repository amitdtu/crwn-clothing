import ShopActionTypes from './shop.type';

export const updateCollection = (collection) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collection
})