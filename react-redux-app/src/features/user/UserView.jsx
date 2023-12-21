import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = function () {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>Users: </h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>Error: {user.error}</div>}
      {!user.loading && user.users && (
        <ul>
          {user.users.map((user) => (
            <li key={user.id} style={{ listStyle: "none" }}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
