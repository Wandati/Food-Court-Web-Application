// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Foods from "./Foods";
import Cart from "./Cart";
// import Login from "./Login";

function App() {
  // const [Restaurants, setRestaurants] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const filteredFoods = foods.filter((food) => {
    return food.food.toLowerCase().includes(query.toLowerCase());
  });

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
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      {/* <Router> */}
      <div>
        <Navbar setQuery={setQuery} />
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <div className="container mt-5">
          <h1 className="text-center">WELCOME TO NEXTGEN FOOD COURT APP </h1>
          <h2 className="text-center">Place Your Order(s) Here</h2>
          <Foods
            addToCart={addToCart}
            filteredFoods={filteredFoods}
            setQuery={setQuery}
          />
          {/* <h1 className="text-center ">Our Restaurants</h1>
        <div className="row mt-3">{restaurants}</div> */}
        </div>
        {/* </Route> */}
        {/* <Route exact path="/Cart"> */}
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          getTotalAmount={getTotalAmount}
          clearCart={clearCart}
        />
        {/* </Route> */}
        {/* <Route exact path="/Login"> */}
        {/* <Login /> */}
        {/* </Route> */}
        {/* </Switch> */}
        <Footer />
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
