import React from "react";

function Cart({ cartItems, removeFromCart, getTotalAmount, clearCart }) {
  const handleCheckOut = () => {
    let ans = prompt("Please put a table number before checking out: ");
    let finalans = parseInt(ans);
    if (finalans > 0) {
      alert(
        `ThankYou For Your Payment . Table Number ${finalans} has been reserved to you.See You Soon!`
      );
    } else {
      alert("Please Input Valid Table number!!");
    }
  };

  return (
    <div className="cart mt-3">
      <h2 className="text-center ">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        //row-cols-1 row-cols-md-2 g-4 flex-wrap
        <div className="row ">
          {cartItems.map((item) => (
            //mb-4 mx-2
            <div key={item.id} className="col-3">
              <div
                className="card h-100 p-2 m-1"
                style={{ width: "320px", height: "350px" }}
              >
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
                    <button
                      className=" btn btn-outline-danger m-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-2">
        <b>Total Amount:</b> {getTotalAmount()} Kshs
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
