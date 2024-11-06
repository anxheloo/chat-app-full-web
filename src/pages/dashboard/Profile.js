import React, { useCallback, useState } from "react";
import LeftMenu from "./LeftMenu/LeftMenu";

const Profile = () => {
  const [formData, setFormData] = useState({
    profilePic:
      "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
    name: "anxhelo",
    about: "ca ke bo mir ",
  });

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    console.log("this is file:");

    // const newFile = Object.assign(file, {
    //   preview: URL.createObjectURL(file)
    // })

    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePic: URL.createObjectURL(file),
      }));
    }
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    try {
      console.log("Data:", formData);
    } catch (error) {
      console.log(error);
      setFormData({
        profilePic: "",
        name: "",
        about: "",
      });
    }

    console.log(formData);
  };

  return (
    <>
      <div className="flex w-full">
        <LeftMenu tMenu title={"Profile"}>
          <form onSubmit={onSubmit} className="space-y-4 ">
            <div className=" py-5">
              <img
                className="size-28 rounded-full mx-auto"
                src={formData?.profilePic}
                alt="profile-photo"
              />
              {/* <input
                type="file"
                className="size-28 rounded-full mx-auto"
                value={formData?.profilePic}
              /> */}
            </div>

            <div class="relative">
              <input
                required
                type="text"
                id="name"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:text-white bg-transparent rounded-lg border border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-lightBlue dark:bg-bgDark2 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>

            <p className="text-gray-900 dark:text-white text-xs pb-2">
              This name is visible to your contacts
            </p>

            <div class="relative">
              <textarea
                rows="4"
                required
                id="about"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:text-white bg-transparent rounded-lg border border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer menu"
                placeholder=" "
                value={formData.about}
                onChange={handleChange}
              />
              <label
                htmlFor="about"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-lightBlue dark:bg-bgDark2  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                About
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-3 py-2 rounded-md bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </LeftMenu>
      </div>
    </>
  );
};

export default Profile;
