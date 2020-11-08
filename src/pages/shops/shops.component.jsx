import React from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapsotToMap } from './../../firebase/firebase.utils'
import { updateCollection } from './../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import WithSipnner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSipnner(CollectionOverview);
const CollectionPageWithSpinner = WithSipnner(CollectionPage)

class Shop extends React.Component {

    state = {
        loading: true,
    }

    unsubscribeSnapshot = null

    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef =  firestore.collection('collections');

        this.unsubscribeSnapshot = collectionRef.onSnapshot(async snapahot => {
            const collectionObject = convertCollectionsSnapsotToMap(snapahot)
            updateCollection(collectionObject)
            this.setState({loading: false})
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
} 


const mapDispatch = dispatch => ({
    updateCollection: (collection) =>  dispatch(updateCollection(collection)),
})

export default connect(null, mapDispatch)(Shop);
