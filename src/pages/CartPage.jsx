// src/pages/CartPage.jsx
import { useCart } from '../context/CartContext';
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')) * product.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <div className="cart-banner">
        <h2>Your Shopping Cart</h2>
        <p>Review your items before proceeding to checkout.</p>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Start adding some products!</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>Price: ${parseFloat(product.price.replace('$', '')).toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button className="decrease-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span className="quantity">{product.quantity}</span>
                    <button className="increase-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
                <div className="cart-item-price">
                  <p>Total: ${(parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="summary-details">
              <h2>Cart Summary</h2>
              <p>Total Price: <strong>${totalPrice}</strong></p>
              <div className="checkout-buttons">
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
