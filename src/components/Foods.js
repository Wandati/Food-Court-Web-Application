import React, { useState } from "react";

function FoodCard({ food, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const totalPrice = food.price * quantity;

  const handleAddToCart = () => {
    addToCart(food, quantity);
  };
  ////p-2 m-1
  return (
    <div key={food.id} className="col-3 ">
      <div className="card h-100 ">
        <img
          src={food.image}
          className="card-img-top"
          alt={food.name}
          height="200px"
          style={{ objectFit: "cover", width: "260px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{food.food}</h5>
          <p className="card-text">
            <b>Price :</b> {food.price}
          </p>
          <label>
            <b>plates</b>
          </label>
          <div className="quantity">
            <button
              className="quantity-button"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>

            <input
              className="quantityValue"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="quantity-button"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <p>
            <b>Total Price:</b> {totalPrice}
          </p>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Foods({ addToCart, filteredFoods, query, setQuery }) {
  const foodCards = filteredFoods.map((food) => (
    <FoodCard key={food.id} food={food} addToCart={addToCart} />
  ));

  return (
    <>
      <div className="col-6 mx-auto my-auto search-box mb-2 mt-2">
        <div className="input-group form-container">
          <input
            type="text"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control search-input"
            autoFocus="autofocus"
            placeholder="Search Foods Here"
          />
        </div>
      </div>
      <div className="row">{foodCards}</div>;
    </>
  );
}
