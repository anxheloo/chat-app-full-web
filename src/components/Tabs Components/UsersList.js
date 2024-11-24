import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../../store/Users/usersSlice";
import { UserComponent } from "../Friends/Friends";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((el, index) => <UserComponent key={el._id} {...el} />)
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default UsersList;
