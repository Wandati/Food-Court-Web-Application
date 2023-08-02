import React from "react";

function Cart({ cartItems, removeFromCart, getTotalAmount, clearCart }) {
  const handleCheckOut = () => {
    alert("Please choose a table before checking out.");
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4 flex-wrap">
          {cartItems.map((item) => (
            <div key={item.id} className="col mb-4 mx-2">
              <div className="card h-100" style={{ width: "320px", height: "350px" }}>
                <img
                  src={item.image}
                  alt={item.food}
                  className="card-img-top cart-item-img"
                  style={{ height: "200px" }}
                />
                <div className="card-body">
                  <p>
                    <b>Food:</b> {item.food} | <b>Price:</b> {item.price} |{" "}
                    <b>Quantity:</b> {item.quantity}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p>
        <b>Total Amount:</b> {getTotalAmount()}
      </p>
      <div className="d-grid gap-2">
        <button className="btn btn-danger" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="btn btn-primary" onClick={handleCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Cart;
