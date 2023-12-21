import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = function () {
  const [restockValue, setRestockValue] = useState(1);
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <input
        value={restockValue}
        onChange={(e) => setRestockValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(restockValue))}>Restock</button>
    </div>
  );
};
