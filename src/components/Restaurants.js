import { useEffect, useState } from "react";

export default function Restaurants() {
  const [Restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);
  const restaurants = Restaurants.map((rest) => {
    return (
      <div key={rest.id} className="col">
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
            Click Here to Get Our Latest Menu
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-center ">Our Restaurants</h1>
      <div className="container">
        <div className="row mt-3">{restaurants}</div>
      </div>
    </>
  );
}
