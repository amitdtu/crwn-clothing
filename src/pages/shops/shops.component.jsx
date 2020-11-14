import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapsotToMap } from './../../firebase/firebase.utils'
import { fetchCollectionStart } from './../../redux/shop/shop.action';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import WithSipnner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSipnner(CollectionOverview);
const CollectionPageWithSpinner = WithSipnner(CollectionPage)

const Shop = ({ fetchCollectionStart,  match, isFetching  }) => {

    useEffect(() => {
        fetchCollectionStart()
    }, [fetchCollectionStart])


    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isFetching={isFetching} {...props} /> } />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isFetching={isFetching} {...props} />} />
        </div>
    )
}


const mapDispatch = dispatch => ({
    fetchCollectionStart: () =>  dispatch(fetchCollectionStart()),
})

const mapState = ({shop: {isFetching}}) => ({
    isFetching,
})

export default connect(mapState, mapDispatch)(Shop);
