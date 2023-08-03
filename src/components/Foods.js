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
<<<<<<< HEAD
    <div key={food.id} className="col-3 ">
      <div className="card h-100 ">
        <img
          src={food.image}
          className="card-img-top"
          alt={food.name}
          height="200px"
        />
=======
    <div key={food.id} className="col-3">
      <div className="card h-100 p-2 m-1 b-5">
        <img src={food.image} className="card-img-top" alt={food.name} />
>>>>>>> 9e349de2dd3f5e69178560427e6c7fe4257a2b9b
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

export default function Foods({ addToCart, filteredFoods }) {
  const foodCards = filteredFoods.map((food) => (
    <FoodCard key={food.id} food={food} addToCart={addToCart} />
  ));

  return <div className="row ">{foodCards}</div>;
}
