import React from 'react';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.action'
import CollectionPreview from '../collection-preview/collection-preview.component';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.component.scss'

 function CollectionItem({item, addItem}) {
    const {id, name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
                <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatch = dispatch => ({
    addItem: item => dispatch(AddItem(item))
})

export default connect(null,mapDispatch)(CollectionItem)
