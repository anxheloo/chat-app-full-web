import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FriendRequests } from "../../store/Users/usersSlice";
import { FriendRequestComponent } from "../Friends/Friends";

const FriendRequestsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FriendRequests());
  }, [dispatch]);

  const { friendRequests } = useSelector((state) => state.users);

  return (
    <div>
      {friendRequests.map((el, index) => (
        <FriendRequestComponent
          key={el._id}
          {...el.sender}
          friendRequestId={el._id}
        />
      ))}
    </div>
  );
};

export default FriendRequestsList;
