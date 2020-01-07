import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import './Components/scss/Button.scss';
import Nav from './Components/Nav';
import ProductGrid from './Components/ProductGrid';
import products from './API/products.json';

class App extends React.Component {

  state = {
    cartIsActive: false,
    cartItems: [],
    products: products,
    cartTotal: 0,
    experimentalCart: localStorage.getItem('cart'),
  }

  toast = (text) => {

    let toast = document.createElement('div');
    toast.innerHTML = text;
    toast.className = 'toast';
    document.body.append(toast);
    setTimeout(() => toast.classList.add('fadeOutUp'), 2500);
    setTimeout(() => document.body.removeChild(toast), 3000);
  }

  toggleCart = () => {

    let { cartIsActive } = this.state;
    // TOGGLE
    cartIsActive = !cartIsActive;
    // UPDATE
    this.setState({ cartIsActive })

  }

  addItemToCart = (name, price) => {
    // Obtener items y total del state
    let { cartItems, cartTotal } = this.state;
    // Añadir item al array
    cartItems.push({ name: name, price: price });
    // Sumar al total el precio del item
    cartTotal = cartTotal + price;
    // Actualizar el estado
    this.setState({ cartItems, cartTotal }, this.toast('Added'));
  }

  removeCartItem = (index, price) => {
    // Obtener items y total del state
    let { cartItems, cartTotal } = this.state;
    // Restar al total el precio del item
    cartTotal = cartTotal - price;
    // Quitar el item del array
    cartItems.splice(index, 1);
    // Actualizar el estado
    this.setState({ cartItems, cartTotal }, this.toast('Removed'));
  }

  render() {
    let { cartIsActive, cartItems, cartTotal, products } = this.state;
    return (
      <div className="App">
        <Nav
          toggleCart={this.toggleCart}
          cartIsActive={cartIsActive}
          cartItems={cartItems}
          cartTotal={cartTotal}
          removeItem={this.removeCartItem.bind(this)}
        />
        <div className="container">
          <h1> Products </h1>
          <ProductGrid addItemToCart={this.addItemToCart} products={products} />
        </div>
      </div>
    );
  }
}



export default App;
