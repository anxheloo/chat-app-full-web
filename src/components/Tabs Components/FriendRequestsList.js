import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FriendRequests } from "../../store/Users/usersSlice";

const FriendRequestsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FriendRequests());
  }, [dispatch]);

  const { friendRequests } = useSelector((state) => state.users);

  return (
    <div>
      {friendRequests.map((el, index) => (
        <div key={index}>{el.firstName}</div>
      ))}
    </div>
  );
};

export default FriendRequestsList;
