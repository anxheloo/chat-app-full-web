import { AiOutlineMessage } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

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
// const MenuItems2 = [
//   {
//     index: 5,
//     icon: <AiOutlineMessage className="size-6" />,
//   },
//   {
//     index: 6,
//     icon: <FaUserGroup className="size-6 " />,
//   },
// ];

export { MenuItems1 };
