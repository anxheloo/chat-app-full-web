import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../../store/Users/usersSlice";
import { UserComponent } from "../Friends/Friends";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.users);

  return (
    <div>
      {users.map((el, index) => (
        <UserComponent key={el._id} {...el} />
      ))}
    </div>
  );
};

export default UsersList;
