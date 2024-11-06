import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import AssignMemberToGroup from "../Members/AssignMemberToGroup";

const membersExample = [
  { id: 1, name: "user 1" },
  { id: 2, name: "user 2" },
  { id: 3, name: "user 3" },
  { id: 4, name: "user 4" },
];

const CreateGroupModal = ({ toggleCreateGroup }) => {
  const [name, setName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [members, setMembers] = useState([]);
  const [focus, setFocus] = useState(false);

  // filtered members => used to display members in dropdown below members input in order to select
  const filteredMembers = membersExample.filter(
    (item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      !members.some((member) => member.id === item.id)
  );

  // add member inside members input
  const addMember = (item) => {
    // const existing = members.find((el) => el.id === item.id);

    setMembers([...members, item]);
    setSearchValue("");
    setFocus(false); // Close the dropdown after adding
  };

  // remove member
  const removeMember = (id) => {
    setMembers(members.filter((item) => item.id !== id));

    setFocus(false);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "members") {
      setSearchValue(value);
      return;
    }

    setName(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // fetch
      // After everything is okej
    } catch (error) {}
  };

  console.log("this are members: ", members);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-[999]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[400px] h-full flex flex-col justify-between max-h-[300px] bg-white rounded-md p-4"
      >
        <div className="flex justify-between items-center py-2">
          <h3 className=" font-bold text-black">Create new group</h3>
          <IoIosCloseCircle size={19} onClick={toggleCreateGroup} />
        </div>

        <div className="h-full space-y-4">
          <div class="relative">
            <input
              required
              type="text"
              id="name"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={name}
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Name
            </label>
          </div>

          <div class="relative flex w-full rounded-lg border appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600">
            {/* show dropdown if input is focused and filteredmembers still has data  */}
            {focus && filteredMembers.length > 0 && (
              <div className=" flex absolute top-[60px] bg-white flex-col gap-2 shadow-md p-2 w-full h-fit rounded-md">
                {filteredMembers.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => addMember(item)}
                    className="cursor-pointer hover:bg-gray-100 px-2"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2 flex-nowrap items-center overflow-scroll menu px-1">
              {members.map((item) => (
                <AssignMemberToGroup
                  data={item}
                  key={item.id}
                  handleClick={() => removeMember(item.id)}
                />
              ))}
            </div>
            <input
              required
              type="text"
              id="members"
              className="flex px-2.5 pb-2.5 pt-4 flex-1 min-w-[80px] text-sm text-gray-900 bg-transparent outline-none peer"
              placeholder=" "
              value={searchValue}
              onChange={handleChange}
              onFocus={() => setFocus(true)}
            />
            {/* {members.length === 0 && ( */}
            <label
              for="members"
              // className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              className="absolute text-sm text-gray-500 dark:text-gray-400 -translate-y-4 scale-75 top-[6px] z-10 bg-white  px-2"
            >
              Members
            </label>
            {/* )} */}
          </div>
          {members.length < 2 && members.length !== 0 && (
            <p>Must have at least 2 members</p>
          )}
        </div>

        <div className=" flex justify-end">
          <button
            disabled={members.length < 2 || name === ""}
            type="submit"
            className="bg-blue-500 rounded-md p-3 text-white"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroupModal;
