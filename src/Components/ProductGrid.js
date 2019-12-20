import React, { Component } from 'react'
import Card from './Card'
import './scss/ProductGrid.scss'

export default class ProductGrid extends Component {

    handleClick(name, price) {
        this.props.addItemToCart(name, price);
    }

    render() {
        const { products } = this.props;

        return (
            <div className="productGrid">
                {
                    products.map(product => {
                        return <Card
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            onClick={this.handleClick.bind(this)}
                        />
                    })
                }
            </div>
        )
    }
}
