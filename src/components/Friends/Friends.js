import React from "react";
import ProfilePic from "../Chat/Profile/ProfilePic";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import useSocket from "../../utils/useSocket";

// const user_id = window.localStorage.getItem("user_id");

const UserComponent = ({
  firstName,
  lastName,
  _id,
  status,
  avatar,
  refetchUsers,
  requestStatus,
}) => {
  // const [isRequestSent, setIsRequestSent] = useState(false);
  const dispatch = useDispatch();
  const socket = useSocket();
  const { user_id } = useSelector((state) => state.auth);
  const name = `${firstName} ${lastName}`;

  const sendRequest = (event) => {
    event.stopPropagation();

    console.log("inside sendrequest");

    socket.emit("friend_request", { to: _id, from: user_id }, () => {
      console.log("request sent");
    });
  };

  return (
    <div className="w-full rounded-sm bg-lightBlue">
      <div className="flex items-center justify-between">
        <ProfilePic online={status === "Online"} img={avatar} />
        <div>{name}</div>
        <button onClick={sendRequest} disabled={requestStatus === "pending"}>
          {" "}
          {requestStatus === "pending" ? "Request Sent" : "Send Request"}
        </button>
      </div>
    </div>
  );
};

const FriendRequestComponent = ({ firstName, lastName, _id, online, img }) => {
  const socket = useSocket();
  const { user_id } = useSelector((state) => state.auth);
  const name = `${firstName} ${lastName}`;

  const acceptRequest = (event) => {
    event.stopPropagation();
    // console.log("Emitting friend_request with data:", {
    //   to: _id,
    //   from: user_id,
    // });
    socket.emit("accept_request", { id: _id }, (response) => {
      console.log("Response from server:", response);
    });
  };

  return (
    <div className="w-full rounded-sm bg-lightBlue">
      <div className="flex items-center justify-between">
        <ProfilePic online={online} img={img} />
        <div>{name}</div>
        <button onClick={acceptRequest}>Accept request</button>
      </div>
    </div>
  );
};

const FriendComponent = ({ firstName, lastName, _id, online, img }) => {
  const { user_id } = useSelector((state) => state.auth);
  const name = `${firstName} ${lastName}`;

  return (
    <div className="w-full rounded-sm bg-lightBlue">
      <div className="flex items-center justify-between">
        <ProfilePic online={online} img={img} />
        <div>{name}</div>
        <IoChatbubblesOutline
          className=" size-6 cursor-pointer active:opacity-70"
          onClick={() => {
            // start a new conversation
            // socket.emit("start_conversation", { to: _id, from: user_id });
          }}
        />
      </div>
    </div>
  );
};

export { UserComponent, FriendRequestComponent, FriendComponent };
