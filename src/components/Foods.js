// import React from "react";
// import { useState } from "react";

// export default function Foods({ filteredFoods }) {
//   const [quantity, setQuantity] = useState(1);
//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };
//   //   function AddItem(food) {
//   //     console.log(food.id);
//   //   }
//   const Foods = filteredFoods.map((food) => {
//     const totalPrice = food.price * quantity;
//     return (
//       <div key={food.id} className="col-3">
//         <div className="card h-100 p-2 m-1 b-2">
//           <img src={food.image} className="card-img-top" alt={food.name} />
//           <div className="card-body">
//             <h5 className="card-title">{food.food}</h5>
//             <p className="card-text">
//               <b>Price :</b> {food.price}
//             </p>
//             <label>
//               <b>plates</b>
//             </label>
//             <div className="quantity">
//               <button
//                 className="quantity-button"
//                 onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
//               >
//                 -
//               </button>

//               <input
//                 className="quantityValue"
//                 type="number"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//               />
//               <button
//                 className="quantity-button"
//                 onClick={() => setQuantity((prev) => prev + 1)}
//                 // onClick={(food) => AddItem(food)}
//               >
//                 +
//               </button>
//             </div>
//             <p>
//               <b>Total Price:</b> {totalPrice} Kshs
//             </p>
//             {/* <p class="card-text">
//               <b>Available Plates :</b> {food.availableplates}
//             </p> */}
//             <button className="btn btn-success">Add To Cart</button>
//           </div>
//         </div>
//       </div>
//     );
//   });
//   return <div className="row ">{Foods}</div>;
// }
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

  return (
    <div key={food.id} className="col-3">
      <div className="card h-100 p-2 m-1 b-2">
        <img src={food.image} className="card-img-top" alt={food.name} />
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
  // const [foods, setFoods] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/food")
  //     .then((res) => res.json())
  //     .then((data) => setFoods(data));
  // }, []);

  const foodCards = filteredFoods.map((food) => (
    <FoodCard key={food.id} food={food} addToCart={addToCart} />
  ));

  return <div className="row">{foodCards}</div>;
}
