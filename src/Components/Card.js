import React, { Component } from 'react'
import './scss/Card.scss'

export default class Card extends Component {

    handleClick(name, price) {
        this.props.onClick(name, price);
    }

    render() {
        const { name, price, image } = this.props;
        return (
            <div className="card">
                <div className="image">
                    <img src={image} alt="Product" />
                </div>
                <div className="content">
                    <div className="title">
                        {name}
                    </div>
                    <p><b>$<span>{price}</span> </b></p>
                    <button onClick={this.handleClick.bind(this, name, price)}
                        className="btn small">
                        Add to cart
                        </button>
                </div>
            </div >
        )
    }
}
