import { useEffect, useState } from "react";
function App() {
  const [Restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);
  const restaurants = Restaurants.map((rest) => {
    return (
      <div key={rest.id} className="col-6">
        <div className="card ">
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
    <div className="container">
      <div className="row">{restaurants}</div>
    </div>
  );
}

export default App;
