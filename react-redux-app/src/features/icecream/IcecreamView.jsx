import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = function () {
  const [restockValue, setRestockValue] = useState(1);
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Icecreams: {numberOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <input
        value={restockValue}
        onChange={(e) => setRestockValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(restockValue))}>Restock</button>
    </div>
  );
};
