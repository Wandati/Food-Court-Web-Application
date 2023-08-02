import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Foods from "./components/Foods";
function App() {
  const [Restaurants, setRestaurants] = useState([]);
  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

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
  const filteredFoods = foods.filter((food) => {
    return food.food.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <Navbar setQuery={setQuery} />
      <div className="container mt-5">
        <h1 className="text-center">Our Foods</h1>
        <Foods filteredFoods={filteredFoods} />
        <h1 className="text-center ">Our Restaurants</h1>
        <div className="row mt-3">{restaurants}</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
