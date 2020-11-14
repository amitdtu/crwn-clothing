import { call, all, takeLatest } from 'redux-saga/effects';
import { fetchCollectionsAsync } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'
import ShopActionTypes from './shop/shop.type'

export default function* rootSaga() {
    yield all([takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync),])
    yield all([
        call(userSagas),
        call(cartSagas),
    ])
}