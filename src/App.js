// // export default App;
// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Foods from "./components/Foods";
// import Cart from "./components/Cart";

// function App() {
//   // const [Restaurants, setRestaurants] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [query, setQuery] = useState("");
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/food")
//       .then((res) => res.json())
//       .then((data) => setFoods(data));
//   }, []);
//   const filteredFoods = foods.filter((food) => {
//     return food.food.toLowerCase().includes(query.toLowerCase());
//   });

//   const addToCart = (food, quantity) => {
//     const item = { ...food, quantity };
//     setCartItems((prevCartItems) => [...prevCartItems, item]);
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((item) => item.id !== id)
//     );
//   };

//   const getTotalAmount = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <>
//       <Navbar setQuery={setQuery} />
//       <div className="container mt-5">
//         <h1 className="text-center">WELCOME TO NEXTGEN FOOD COURT APP </h1>
//         <h2 className="text-center">Place Your Order(s) Here</h2>
//         <Foods addToCart={addToCart} filteredFoods={filteredFoods} />
//         {/* <h1 className="text-center ">Our Restaurants</h1>
//         <div className="row mt-3">{restaurants}</div> */}
//         <Cart
//           cartItems={cartItems}
//           removeFromCart={removeFromCart}
//           getTotalAmount={getTotalAmount}
//           clearCart={clearCart}
//         />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;
// import Restaurants from "./components/Restaurants";

// function App() {
//   return <Restaurants />;
// }
// export default App;
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* all routes to be contained here */}
      <Routes>
        {/* this is the root path */}
        <Route path="/" element={<Start />} /> {/* 👈 Renders at /app/ */}
        {/* Add a new route for the Home component */}
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
    <>
      
  );
}

export default App;
