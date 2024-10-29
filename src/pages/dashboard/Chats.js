import React, { useState } from "react";
import { LuCircleDashed } from "react-icons/lu";
import { CgSearch } from "react-icons/cg";
import { LuArrowDownSquare } from "react-icons/lu";
import ChatElement from "../../components/Chat/ChatElement";

const Chatlist = [
  {
    id: 0,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Anxhelo",
    msg: "ome ca bone",
    time: "9:36",
    unread: 0,
    pinned: true,
    online: false,
  },
  {
    id: 1,
    img: "https://yt3.ggpht.com/a/AATXAJxOx6uvCIEdUG-dNfj3Gqx6USeKl0jItzWYoUq2=s88-c-k-c0x00ffffff-no-rj",
    name: "Mira",
    msg: "Hola! Qué tal?",
    time: "10:15",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: "https://yt3.ggpht.com/a/AATXAJyPG8z_5VONnCVbNxgJazwJ6f6FFdKrNsSGl3gx=s88-c-k-c0x00ffffff-no-rj",
    name: "Leo",
    msg: "Vamos a la playa?",
    time: "11:04",
    unread: 1,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: "https://yt3.ggpht.com/a/AATXAJyI-bN3b4N_sgvYOKdQBBgFHTsNnlMeQzMOx_ZB=s88-c-k-c0x00ffffff-no-rj",
    name: "Sofia",
    msg: "Vuelve pronto!",
    time: "12:45",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 4,
    img: "https://yt3.ggpht.com/a/AATXAJxLfQvhO-p4DwEnEjqWfjqWzXsDeqQaArOw5Wv0=s88-c-k-c0x00ffffff-no-rj",
    name: "Carlos",
    msg: "A qué hora nos vemos?",
    time: "13:30",
    unread: 3,
    pinned: true,
    online: true,
  },
  {
    id: 5,
    img: "https://yt3.ggpht.com/a/AATXAJyIGVJUkYlWdmEYtFg0glkXg68gP7j-mHuWgcfk=s88-c-k-c0x00ffffff-no-rj",
    name: "Ana",
    msg: "Te llamo más tarde",
    time: "14:20",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: "https://yt3.ggpht.com/a/AATXAJxPPUu9Rhjdo5IS9MoxxLl1DZnDbR-eMfNVHpvc=s88-c-k-c0x00ffffff-no-rj",
    name: "Julia",
    msg: "Tienes el link?",
    time: "15:00",
    unread: 4,
    pinned: false,
    online: true,
  },

  {
    id: 7,
    img: "https://yt3.ggpht.com/a/AATXAJyIGVJUkYlWdmEYtFg0glkXg68gP7j-mHuWgcfk=s88-c-k-c0x00ffffff-no-rj",
    name: "Ana",
    msg: "Te llamo más tarde",
    time: "14:20",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 8,
    img: "https://yt3.ggpht.com/a/AATXAJxPPUu9Rhjdo5IS9MoxxLl1DZnDbR-eMfNVHpvc=s88-c-k-c0x00ffffff-no-rj",
    name: "Julia",
    msg: "Tienes el link?",
    time: "15:00",
    unread: 4,
    pinned: false,
    online: true,
  },
];

const Chats = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleChats = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-[300px]" : "w-0"
      } bg-lightBlue dark:bg-bgDark2 shadow-md ${
        isOpen && "p-4"
      } space-y-4 border-r dark:border-textPrimary transition-all duration-300 delay-200 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h4 className=" text-lg font-bold dark:text-white">Chats</h4>
        <div
          onClick={toggleChats}
          className={`text-textPrimary dark:text-white cursor-pointer ${
            !isOpen && "absolute top-20 left-5"
          } dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 p-2 rounded-full`}
        >
          <LuCircleDashed size={"21px"} />
        </div>
      </div>

      <div className="h-[40px]  w-full rounded-md dark:rounded-full flex bg-white dark:bg-black items-center px-2 border border-bluePrimary dark:border-none">
        <CgSearch size={"20px"} className=" text-textPrimary" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 h-full outline-none pl-2 bg-transparent dark:caret-white"
        />
      </div>

      <div className="border-b border-gray-200 py-2">
        <div className="flex gap-3 items-center">
          <LuArrowDownSquare
            size={20}
            className="text-textPrimary dark:text-white"
          />
          <h4 className="text-bluePrimary hover:bg-gray-200 p-1 rounded-md cursor-pointer">
            Archived
          </h4>
        </div>
      </div>

      <div className="overflow-y-scroll h-full flex-grow-1 menu w-full pb-[180px]">
        <div className="flex-col">
          <h5 className=" text-textPrimary dark:text-white font-semibold pb-4">
            Pinned
          </h5>
          <div className="flex flex-col gap-2 ">
            {Chatlist.filter((item) => item.pinned === true).map((item) => (
              <ChatElement key={item.id} data={item} />
            ))}
          </div>
        </div>

        <div className="flex-col py-2">
          <h5 className=" text-textPrimary dark:text-white font-semibold pb-4">
            All chats
          </h5>

          <div className="flex flex-col gap-2 ">
            {Chatlist.filter((item) => item.pinned !== true).map((item) => (
              <ChatElement key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
