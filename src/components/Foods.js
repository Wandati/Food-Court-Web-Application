import React from "react";

export default function Foods({ filteredFoods }) {
  const Foods = filteredFoods.map((food) => {
    return (
      <div key={food.id} className="col-3">
        <div className="card h-100 p=">
          <img src={food.image} className="card-img-top" alt={food.name} />
          <div className="card-body">
            <h5 className="card-title">{food.food}</h5>
            <p className="card-text">
              <b>Price :</b> {food.price}
            </p>
            {/* <p class="card-text">
              <b>Available Plates :</b> {food.availableplates}
            </p> */}
            <button className="btn btn-success">Add To Cart</button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row ">{Foods}</div>;
}
