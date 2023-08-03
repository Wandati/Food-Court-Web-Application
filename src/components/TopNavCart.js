// TopNavCart.js
import React from 'react';

const TopNavCart = ({ cartItems, removeFromCart, getTotalAmount, clearCart }) => {
  return (
    <div className="cart-popup">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.food} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
          <li>Total: ${getTotalAmount().toFixed(2)}</li>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handleCheckout}>Checkout</button>
        </ul>
      )}
    </div>
  );
};

export default TopNavCart;
