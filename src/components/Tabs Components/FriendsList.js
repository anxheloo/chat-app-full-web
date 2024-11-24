import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Friends } from "../../store/Users/usersSlice";
import { FriendComponent } from "../Friends/Friends";

const FriendsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Friends());
  }, [dispatch]);

  const { friends } = useSelector((state) => state.users);

  return (
    <div>
      {friends.length > 0 ? (
        friends.map((el, index) => <FriendComponent key={el._id} {...el} />)
      ) : (
        <div>you have no friends</div>
      )}
    </div>
  );
};

export default FriendsList;
