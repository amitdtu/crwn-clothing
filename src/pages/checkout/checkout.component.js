import React from 'react'

import CheckoutItem from './../../components/checkout-item/checkout-item.component'

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux';
import './checkout.style.scss';

const Checkout = ({ cartItems, total }) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Porduct</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItems.id} cartItem={cartItem} />
                )
            }
            <div className="total">
            <sapn>TOTAL ${total}</sapn>
            </div>
        </div>  
    )
}

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal,
})

export default connect(mapState)(Checkout);