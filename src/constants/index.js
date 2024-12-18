import { AiOutlineMessage } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CgSearch } from "react-icons/cg";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { GoFileMedia } from "react-icons/go";
import { RiFile4Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import { GrShieldSecurity } from "react-icons/gr";
import { PiPencilCircleLight } from "react-icons/pi";
import { LuWallpaper } from "react-icons/lu";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { CiKeyboard } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";

const MenuItems1 = [
  {
    index: 0,
    icon: <AiOutlineMessage className={`size-6`} />,
    path: "/app",
  },
  {
    index: 1,
    icon: <FaUserGroup className="size-6 " />,
    path: "/group",
  },
  {
    index: 2,
    icon: <IoCallOutline className="size-6" />,
    path: "/call",
  },
  {
    index: 3,
    icon: <div className="w-[44px] h-[1px] bg-gray-300" />,
    path: "/jjj",
  },
  {
    index: 4,
    icon: <CiSettings className="size-6 " />,
    path: "/settings",
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

const Settings_Items = [
  {
    id: "notifications",
    index: 0,
    title: "Notifications",
    icon: <CiBellOn className="size-[23px] cursor-pointer" />,
  },
  {
    id: "privacy",
    index: 1,
    title: "Privacy",
    icon: <SiGnuprivacyguard className="size-[23px] cursor-pointer" />,
  },
  {
    id: "security",
    index: 2,
    title: "Security",
    icon: <GrShieldSecurity className="size-[23px] cursor-pointer" />,
  },
  {
    id: "theme",
    index: 3,
    title: "Theme",
    icon: <PiPencilCircleLight className="size-[23px] cursor-pointer" />,
  },
  {
    id: "wallpaper",
    index: 4,
    title: "Chat Wallpaper",
    icon: <LuWallpaper className="size-[23px] cursor-pointer" />,
  },
  {
    id: "info",
    index: 5,
    title: "Request Account info",
    icon: <RiAccountPinBoxLine className="size-[23px] cursor-pointer" />,
  },
  {
    id: "shortcuts",
    index: 6,
    title: "Keyboard shortcuts",
    icon: <CiKeyboard className="size-[23px] cursor-pointer" />,
  },
  {
    id: "Help",
    index: 7,
    title: "Help",
    icon: <IoIosHelpCircleOutline className="size-[23px] cursor-pointer" />,
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

const Chatlist = [
  {
    id: 0,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Anxhelo",
    msg: "ome ca bone",
    time: "9:36",
    unread: 0,
    pinned: true,
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

const CallLogs = [
  {
    id: 0,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Anxhelo",
    missed: false,
    incoming: true,
    online: false,
  },
  {
    id: 1,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Bexhet pacolli",
    missed: false,
    incoming: false,
    online: false,
  },
  {
    id: 2,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Ylli rakipi",
    missed: false,
    incoming: false,
    online: true,
  },
  {
    id: 3,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Favziu",
    missed: false,
    incoming: true,
    online: true,
  },
];

const CallMembers = [
  {
    id: 0,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Anxhelo",
    online: false,
  },
  {
    id: 1,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Bexhet pacolli",
    online: false,
  },
  {
    id: 2,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Ylli rakipi",
    online: true,
  },
  {
    id: 3,
    img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "Favziu",
    online: true,
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

const Shared_links = [
  {
    type: "msg",
    subtype: "link",
    preview:
      "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview:
      "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview:
      "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview:
      "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview:
      "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview:
      "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
];

const ActionIcons = [
  {
    id: 0,
    icon: (
      <AiOutlineUser
        className={`size-[21px] dark:text-white text-white cursor-pointer`}
        // bg-[#03045E]
      />
    ),
    title: "User",
  },
  {
    id: 1,
    icon: (
      <IoDocumentOutline
        className={`size-[21px] dark:text-white text-white cursor-pointer `}
        // bg-[#023E8A]
      />
    ),
    title: "File",
  },
  {
    id: 2,
    icon: (
      <CiCamera
        className={`size-[21px] dark:text-white text-white cursor-pointer `}
        // bg-[#0077B6]
      />
    ),
    title: "Camera",
  },
  {
    id: 3,
    icon: (
      <RiFile4Line
        className={`size-[21px] dark:text-white text-white cursor-pointer `}
        // bg-[#0096C7]
      />
    ),
    title: "File2",
  },
  {
    id: 4,
    icon: (
      <GoFileMedia
        className={`size-[21px] dark:text-white text-white cursor-pointer `}
        // bg-[#00B4D8]
      />
    ),
    title: "Media",
  },
];

const ProfileIcons = [
  {
    id: 0,
    icon: (
      <FaUserGroup
        className={`size-[21px]  text-black cursor-pointer`}
        // bg-[#03045E]
      />
    ),
    title: "Profile",
    path: "/profile",
  },
  {
    id: 1,
    icon: (
      <CiSettings
        className={`size-[21px]  text-black cursor-pointer `}
        // bg-[#023E8A]
      />
    ),
    title: "Settings",
    path: "/settings",
  },
  {
    id: 2,
    icon: (
      <CiLogout
        className={`size-[21px]  text-black cursor-pointer `}
        // bg-[#0077B6]
      />
    ),
    title: "Logout",
  },
];

const MenuOptions = [
  { title: "Reply" },
  { title: "React to message" },
  { title: "Forward message" },
  { title: "Star message" },
  { title: "Report" },
  { title: "Delete Message" },
];

const GroupList = [
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

// const ProfileOptions = [
//   { title: "Reply" },
//   { title: "React to message" },
//   { title: "Forward message" },
//   { title: "Star message" },
//   { title: "Report" },
//   { title: "Delete Message" },
// ];

export {
  MenuItems1,
  TopBarItems,
  Chat_History,
  Chatlist,
  CallLogs,
  CallMembers,
  Message_options,
  Shared_docs,
  ActionIcons,
  MenuOptions,
  ProfileIcons,
  Shared_links,
  Settings_Items,
  GroupList,
};
