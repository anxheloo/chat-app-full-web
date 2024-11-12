import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Friends } from "../../store/Users/usersSlice";

const FriendsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Friends());
  }, [dispatch]);

  const { friends } = useSelector((state) => state.users);

  return (
    <div>
      {friends.map((el, index) => (
        <div key={index}>{el.firstName}</div>
      ))}
    </div>
  );
};

export default FriendsList;
