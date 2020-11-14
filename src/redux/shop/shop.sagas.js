import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import ShopActionTypes from './shop.type';
import { firestore, convertCollectionsSnapsotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionFailed, fetchCollectionSuccess } from './shop.action';

export function* fetchCollectionsAsync(){

    try{
        const collectionRef = yield firestore.collection('collections')
        const snapshop = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsSnapsotToMap, snapshop);
        yield put(fetchCollectionSuccess(collectionMap))
    } catch(err) {
        yield put(fetchCollectionFailed(err.message))
    }
}


// export function* fetchColletionStart(){
//     yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync )
// }