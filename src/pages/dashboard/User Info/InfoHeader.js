import React, { useMemo } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setType,
  toggleUserDetails,
} from "../../../store/UserDetails/userSlice";
import { IoMdArrowBack } from "react-icons/io";

const InfoHeader = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.user.detailsType);

  const closeInfo = (event) => {
    const { id } = event.target;

    if (id === "contact") {
      dispatch(toggleUserDetails());
      return;
    }

    if (id === "shared" || id === "starred") {
      dispatch(setType("contact"));
    }
  };

  const renderUI = useMemo(() => {
    if (type === "contact") {
      return (
        <>
          <IoIosCloseCircleOutline
            id="contact"
            onClick={closeInfo}
            className="dark:text-white size-[19px] cursor-pointer"
          />
          <h4 className="text-textPrimary dark:text-white flex-1">
            Contact info
          </h4>
        </>
      );
    } else if (type === "starred") {
      return (
        <IoMdArrowBack
          className="dark:text-white size-[19px] cursor-pointer"
          id="starred"
          onClick={closeInfo}
        />
      );
    } else {
      return (
        <IoMdArrowBack
          className="dark:text-white size-[19px] cursor-pointer"
          id="shared"
          onClick={closeInfo}
        />
      );
    }
  }, [type]);

  return (
    <div className="h-[70px] w-full flex items-center gap-4 bg-white dark:bg-bgDark2 px-4 border-b dark:border-textPrimary transition-colors 0.3s ease-in-out">
      {renderUI}
    </div>
  );
};

export default InfoHeader;
