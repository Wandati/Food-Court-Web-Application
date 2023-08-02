import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Foods from "./components/Foods";
import Cart from "./components/Cart"; 

function App() {
  const [Restaurants, setRestaurants] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  const addToCart = (food, quantity) => {
    const item = { ...food, quantity };
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const restaurants = Restaurants.map((rest) => {
    return (
      <div key={rest.id} className="col-6">
        <div className="card">
          <img
            src={rest.image}
            className="card-img-top img-fluid"
            alt={rest.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{rest.name}</h5>
          <p className="card-text">Contact us on: {rest.contact} </p>
          <button className="btn btn-dark">
            Click Here to View Our latest Menu
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Our Foods</h1>
        <Foods addToCart={addToCart} />
        <h1 className="text-center ">Our Restaurants</h1>
        <div className="row mt-3">{restaurants}</div>
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          getTotalAmount={getTotalAmount}
          clearCart={clearCart}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
