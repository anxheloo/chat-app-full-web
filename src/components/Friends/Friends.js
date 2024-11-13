import React from "react";
import { socket } from "../../socket";
import ProfilePic from "../Chat/Profile/ProfilePic";
import { IoChatbubblesOutline } from "react-icons/io5";

const UserComponent = ({ firstName, lastName, _id, online, img }) => {
  const name = `${firstName} ${lastName}`;
  const user_id = window.localStorage.getItem;

  return (
    <div className="w-full rounded-sm bg-lightBlue">
      <div className="flex items-center justify-between">
        <ProfilePic online={online} img={img} />
        <div>{name}</div>
        <button
          onClick={() => {
            socket.emit("friend_request", { to: _id, from: user_id }, () => {
              alert("request sent");
            });
          }}
        >
          Send request
        </button>
      </div>
    </div>
  );
};

const FriendRequestComponent = ({
  firstName,
  lastName,
  _id,
  online,
  img,
  friendRequestId,
}) => {
  const name = `${firstName} ${lastName}`;

  return (
    <div className="w-full rounded-sm bg-lightBlue">
      <div className="flex items-center justify-between">
        <ProfilePic online={online} img={img} />
        <div>{name}</div>
        <button
          onClick={() => {
            socket.emit(
              "accept_request",
              { request_id: friendRequestId },
              () => {
                alert("request sent");
              }
            );
          }}
        >
          Accept request
        </button>
      </div>
    </div>
  );
};

const FriendComponent = ({ firstName, lastName, _id, online, img }) => {
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
          }}
        />
      </div>
    </div>
  );
};

export { UserComponent, FriendRequestComponent, FriendComponent };
