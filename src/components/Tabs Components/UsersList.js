import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../../store/Users/usersSlice";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.users);

  return (
    <div>
      {users.map((el, index) => (
        <div key={index}>{el.firstName}</div>
      ))}
    </div>
  );
};

export default UsersList;
