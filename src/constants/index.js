import { AiOutlineMessage } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CgSearch } from "react-icons/cg";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const MenuItems1 = [
  {
    index: 0,
    icon: <AiOutlineMessage className={`size-6`} />,
  },
  {
    index: 1,
    icon: <FaUserGroup className="size-6 " />,
  },
  {
    index: 2,
    icon: <IoCallOutline className="size-6" />,
  },
  {
    index: 3,
    icon: <div className="w-[44px] h-[1px] bg-gray-300" />,
  },
  {
    index: 4,
    icon: <CiSettings className="size-6 " />,
  },
];

const TopBarItems = [
  {
    index: 0,
    icon: (
      <div className=" size-[40px] rounded-full flex items-center justify-center dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 p-2">
        <IoVideocamOutline
          className={`size-[23px] dark:text-white cursor-pointer`}
        />
      </div>
    ),
  },
  {
    index: 1,
    icon: (
      <div className=" size-[40px] rounded-full flex items-center justify-center dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 p-2">
        <IoCallOutline
          className={`size-[21px] dark:text-white cursor-pointer`}
        />
      </div>
    ),
  },
  {
    index: 2,
    icon: (
      <div className=" size-[40px] rounded-full flex items-center justify-center dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 p-2">
        <CgSearch className={`size-[21px] dark:text-white cursor-pointer`} />
      </div>
    ),
  },
  {
    index: 3,
    icon: (
      <div className="w-[1px] h-[60%] bg-gray-300 opacity-50 cursor-pointer" />
    ),
  },
  {
    index: 4,
    icon: (
      <div className=" size-[40px] rounded-full flex items-center justify-center dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 p-2">
        <IoIosArrowDown
          className={`size-[21px] dark:text-white cursor-pointer`}
        />
      </div>
    ),
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    // img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    img: "https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const Shared_docs = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
];

// const Shared_links = [
//   {
//     type: "msg",
//     subtype: "link",
//     preview: faker.image.cats(),
//     message: "Yep, I can also do that",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "link",
//     preview: faker.image.cats(),
//     message: "Yep, I can also do that",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "link",
//     preview: faker.image.cats(),
//     message: "Yep, I can also do that",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "link",
//     preview: faker.image.cats(),
//     message: "Yep, I can also do that",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "link",
//     preview: faker.image.cats(),
//     message: "Yep, I can also do that",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "link",
//     preview: faker.image.cats(),
//     message: "Yep, I can also do that",
//     incoming: true,
//     outgoing: false,
//   },
// ];

export { MenuItems1, TopBarItems, Chat_History, Message_options, Shared_docs };
