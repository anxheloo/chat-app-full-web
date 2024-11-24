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
      {friendRequests.length > 0 ? (
        friendRequests.map((el, index) => (
          <FriendRequestComponent key={el._id} {...el.sender} />
        ))
      ) : (
        <div>you have 0 friend requests</div>
      )}
    </div>
  );
};

export default FriendRequestsList;
