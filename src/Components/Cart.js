import React, { Component } from 'react'
import './scss/Cart.scss'

export default class Cart extends Component {

    removeItem = (index, price) => {
        this.props.removeItem(index, price);
    }

    render() {
        let { cartItems, cartTotal, cartIsActive } = this.props;

        return (
            <div className={cartIsActive ? 'active' : ' cart'} id="cart">
                <h2>Cart: ${cartTotal}</h2>
                <h5>Cart Items List</h5>
                <ul className="cart-item-list">
                    {
                        cartItems.length ?

                            cartItems.map((item, index) => {
                                return (
                                    <li key={index}
                                        onClick={this.removeItem.bind(this, index, item.price)}
                                        className="cart-item"
                                        title="Remove from cart">
                                        <span>{item.name}</span>
                                        <span>${item.price}</span>
                                    </li>
                                );
                            })
                            :
                            <p style={{
                                color: '#777',
                                textAlign: 'center',
                                fontWeight: '400',
                                margin: '50px 0'
                            }}> You have no products in your cart
                            </p>
                    }
                </ul>
            </div>
        )
    }
}
