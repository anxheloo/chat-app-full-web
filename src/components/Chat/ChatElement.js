import React, { memo } from "react";
import ProfilePic from "./Profile/ProfilePic";
import { useDispatch } from "react-redux";
import { SelectConversation } from "../../store/Users/usersSlice";

const ChatElement = memo(({ data }) => {
  const dispatch = useDispatch();
  console.log("Chat element is rendered");

  const selectChat = () => {
    dispatch(SelectConversation({ room_id: data.id }));
  };

  return (
    <div
      onClick={selectChat}
      className="w-full h-[65px] rounded-md flex gap-3  border border-bluePrimary dark:border-none dark:bg-black px-2 cursor-pointer dark:text-white hover:opacity-80 hover:shadow-lg"
    >
      <ProfilePic img={data?.img} online={data?.online} />
      <div className="flex-1 flex flex-col justify-between py-2 dark:text-white truncate">
        <h3 className="font-semibold">{data?.name}</h3>
        <p className="truncate text-sm">{data?.msg}</p>
      </div>

      <div className=" text-xs flex flex-col justify-between py-[10px] w-[30px]">
        <span>{data?.time}</span>
        <div className=" flex items-center">
          <span className=" size-4 rounded-full bg-bluePrimary flex justify-center items-center text-white text-[10px] font-semibold">
            {data?.unread}
          </span>
        </div>
      </div>
    </div>
  );
});

export default ChatElement;
